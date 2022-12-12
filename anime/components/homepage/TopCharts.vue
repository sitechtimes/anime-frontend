<template>
    <div class="charts-container">
      <div class="charts-rank">{{ rank }}</div>
      <img class="charts-img" :src="`${img}`" alt="" />
      <div class="charts-info">
        <h3 class="charts-title">{{ title }}</h3>
        <div class="charts-details">
          <h4 class="charts-ep">{{ episode }}</h4>
          <h4 class="charts-votes">{{ votes }}</h4>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'TopCharts',
    props: {
      rank: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      episode: {
        type: Number,
        required: true,
      },
      votes: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  
  .charts-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 6rem;
    margin-bottom: 0.5rem;
    background-color: var(--bg-primary);
    border-radius: 0.5rem;
  }
  .charts-rank {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem 0 0 0.5rem;
    background-color: var(--secondary);
    color: var(--white);
    font-size: var(--h3);
    font-weight: var(--fw-bold);
  }
  .charts-img {
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
  }
  .charts-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.5rem;
    width: 100%;
  }
  .charts-title {
    width: 100%;
    color: var(--white);
    font-size: var(--h6);
    font-weight: var(--fw-reg);
    padding: 0.5rem;
  }
  .charts-details {
    display: flex;
    flex-direction: row;  
    align-items: center;
    width: 100%;
    padding: 0.5rem;
  }
  .charts-ep {
    color: var(--white);
    font-size: var(--h6);
    font-weight: var(--fw-reg);
    padding: 0.5rem;
  }
  .charts-votes {
    color: var(--white);
    font-size: var(--h6);
    font-weight: var(--fw-reg);
    padding: 0.5rem;
  }
  </style>