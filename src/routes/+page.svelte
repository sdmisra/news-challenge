<script>
import { Router, Route, Link } from "svelte-routing";
import Header from './header.svelte'
import {onMount} from 'svelte'
import {getHeadlines, getSearch} from '$lib/apiCalls.js'
import Card from './browserCard.svelte'
onMount(async ()=> {
  let headlines =  await getHeadlines()
  displayedStories = headlines.articles
})

const searchFunction = async (query)=> {
  let results = await getSearch(query)
  displayedStories = results.articles
}

let displayedStories = []
let searchText = ''
let url= ''
</script>


<Router {url}>
  <Header/>
  <Route exact path='/'>
    <main class='blog-body'>
      <div class="search-bar">
        <input type='text' class="input-bar" placeholder="Search for a story..." on:change={event => searchText = event.target.value} 
        value={searchText}/>
        <button class="search-button" 
        on:click={searchFunction(searchText) }>Search</button>
      </div>
      <section class="story-container">
        {#each displayedStories as story}
        <Link to='/article/' class='story-card-link'>
          <Card {story}/>
        </Link>
        {:else}
          <p class='loading-text'>Loading Articles!</p>
        {/each}
      </section>
    </main>
  </Route>
  <Route path='/article/:id'>
    <Card/>
  </Route>
</Router>

<style>
  :global(.story-card-link) {
    text-decoration: none;
    color: black;
    width: 48%;
  }
  .loading-text {
    font-family: 'Menzanine', sans-serif;
    color: aliceblue;
    text-shadow: -1px 1px 2px #000,
          1px 1px 2px #000,
          1px -1px 0 #000,
          -1px -1px 0 #000;
  }
  .story-container {
    display:flex;
    flex-wrap: wrap;
    padding: .15rem;
    margin: .25rem;
    width: 95vw;
  }
  .blog-body {
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
    min-width: 100%;
    background: rgba(240, 248, 255, 0.522);
    border: 2px rgba(240, 248, 255, 0.5) solid;
    border-radius: .25rem;
    margin: .15rem;
  }
</style>