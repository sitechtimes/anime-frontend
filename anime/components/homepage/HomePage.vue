<template></template>

<script setup lang="ts">
import { animeRest } from "~~/types/anime";
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();

const pageLeftIndicator = ref<boolean>(false);
const pageRightIndicator = ref<boolean>(true);
const airingAnime = ref<animeRest[]>();
const loading = ref<boolean>(true);
const loadingAnimeHome: number[] = [...Array(12).keys()];
const animePerPage = ref<number>(12);
const totalPage = ref<number>(0);
const pageFilteredAnime = ref([] as animeRest[]);
const startPageIndex = ref<number>(0);
const endPageIndex = ref<number>(12);
const sortedAnimeTop = ref([]);
// const pageExistLeft = reffalse

onMounted(() => {
    getTopChart();

    userStore.animeId = 0;
    userStore.pageNumber = 1;

    userStore
        .getAllAnime()
        .then((data) => {
            const airingAnimeArr = [] as animeRest[];

            data!.filter(function (anime: animeRest) {
                if (anime.status == "Currently Airing") {
                    airingAnimeArr.push(anime);
                }
            });

            userStore.airingAnime = airingAnimeArr;

            airingAnime.value = userStore.airingAnime.slice(
                startPageIndex.value,
                endPageIndex.value
            );
            calculateTotalPage();

            loading.value = false;
        })
        .catch((err) => {
            alert(err);
        });
});

async function getTopChart() {
    const endpoint = "http://127.0.0.1:8000/graphql/";
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
    };
    const graphqlQuery = {
        query: `{
  sortedCurrentlyWatching{
    animeName,
    currentlyWatching,
    imageUrl,
    episodes,
	malId
  }
}`,
        variables: {},
    };
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
    };
    const response = await fetch(endpoint, options);
    const queryData = await response.json();

    sortedAnimeTop.value = queryData.data.sortedCurrentlyWatching;
}

function next(): void {
    if (userStore.endPageIndex < userStore.airingAnime.length) {
        userStore.startPageIndex += 11;
        userStore.endPageIndex += 11;
        userStore.pageNumber += 1;
        pageExistLeft.value = true;
        airingAnime.value = userStore.airingAnime.slice(
            userStore.startPageIndex,
            userStore.endPageIndex
        );
    }
}
function calculateTotalPage() {
    totalPage.value = Math.ceil(
        userStore.airingAnime.length / animePerPage.value
    );
}

function pageExistIndicator() {
    if (userStore.pageNumber == 1) {
        pageLeftIndicator.value = false;
    } else {
        pageLeftIndicator.value = true;
    }
    if (userStore.pageNumber == totalPage.value) {
        pageRightIndicator.value = false;
    } else {
        pageRightIndicator.value = true;
    }
}

function pagenation(direction: number) {
    if (direction == 0) {
        if (userStore.pageNumber != 1) {
            pageLeftIndicator.value = true;
            pageRightIndicator.value = true;
            startPageIndex.value -= animePerPage.value;
            endPageIndex.value -= animePerPage.value;
            userStore.pageNumber -= 1;
        }
    } else if (direction == 1) {
        if (userStore.pageNumber != totalPage.value) {
            pageLeftIndicator.value = true;
            pageRightIndicator.value = true;
            startPageIndex.value += animePerPage.value;
            endPageIndex.value += animePerPage.value;
            userStore.pageNumber += 1;
        }
    }
    pageExistIndicator();
    pageFilteredAnime.value = userStore.filterAnime.slice(
        startPageIndex.value,
        endPageIndex.value
    );
}

function saveClickedAnimeID(id: number): void {
    userStore.storeAnimeId(id);
}

function selectPage(num: number): void {
    userStore.startPageIndex = num * 11 - 11;
    userStore.endPageIndex = num * 11 + 1;
    airingAnime.value = userStore.airingAnime.slice(
        userStore.startPageIndex,
        userStore.endPageIndex
    );
}
</script>

<style scoped></style>
