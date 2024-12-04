<script>
import {onMount} from 'svelte';

let todoItem = $state('');
let todoList = $state([]);
let storedList;

onMount(() =>{
     storedList = localStorage.getItem("storedList");
     if(storedList) {
          todoList = (JSON.parse(storedList));
     }
})

function updateList() {
     return storedList = localStorage.setItem("storedList", JSON.stringify(todoList));
}

function addItem(event) {
     event.preventDefault();
     if (todoItem == '') {
          return;
     }
     todoList = [...todoList, {
          text: todoItem,
          done: false
     }];
     updateList();
     todoItem = '';
}

function removeItem(index) {
     todoList = todoList.toSpliced(index, 1);
     updateList();
}

function nuke() {
     todoList.length = 0;
     localStorage.clear();
}

$inspect(todoList);

</script>

{#if (todoList.length >= 10)}
<p>Enter your items below! (Woah, that's a lot!)</p>
{:else}
<p>Enter your items below!</p>
{/if}

<form onsubmit={addItem}>
<input type="text" bind:value={todoItem}>
<button type="submit">Add</button>
</form>

<ul>
     {#each todoList as item, index}
          <li>
               <input type="checkbox" bind:checked={item.done}>
               <span class:done={item.done}> {item.text}</span>
               <button type="button" onclick={() => removeItem(index)} class="remove">X</button>
          </li>
     {/each}
</ul>
{#if (todoList.length == 0)}
     <button type="button" class="btndis">Erase All</button>
{:else}
     <button type="button" class="btnena" onclick={nuke}>Erase All</button>
{/if}

<style>

     ul {
          list-style: none;
          color:rgb(95, 73, 0);
     }
     span.done {
          color:rgb(68, 66, 57);
          text-decoration: line-through;
     }
     button {
          border-radius: 5px;
          color:rgb(95, 73, 0);
          border-color: rgb(95, 73, 0);
          background-color: rgb(204, 179, 99);
          font-size: 1vw;
          border-style: solid;
     }
     .remove {
          color: rgb(174, 0, 0);
          font-weight: bold;
     }
     li {
          margin-bottom: 3%;
     }
     .btndis {
          color:rgb(68, 66, 57);
          border-color: rgb(68, 66, 57);
          background-color: rgb(172, 168, 141);
     }
     input {
          background-color: rgb(250, 229, 163);
          border-radius: 5px;
          font-size: 1vw;
          font-family: "Covered By Your Grace", cursive;
          border-color: rgb(95, 73, 0);
          color: rgb(95, 73, 0);
          border-style: solid;
     }
</style>