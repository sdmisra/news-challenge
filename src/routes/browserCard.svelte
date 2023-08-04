<script>
  export let story
</script>


<section class='story-card' >
  <img src={story.urlToImage} alt={story.title} class='thumbnail'/>
  <span class='story-title'>{story.title}</span>
  <span>Date: {story.publishedAt.slice(0,10)}</span>
  <a href={story.url}>Link to full story</a>
</section>

<style>
    .story-card {
    display:flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Rethogen Atomics';
    margin: .15rem;
    padding: .15rem;
    background: rgba(153, 183, 214, 0.504);
    border: 1px black solid;
    height: 100%;
    width: 100%;
  }

  .thumbnail {
    border: 1px aliceblue solid;
    border-radius: .2rem;
    min-height: 40%;
    min-width: 45%;
    width: 45%;
    height: 40%;
  }
</style>