<template>
    <div class="row" >
        <div class="col-md-12">
            <div class="container">
                <h1>Blog Recipes</h1>
                <router-link class="btn btn-success" to="/">New Recipe
                </router-link>

                <div v-for="recipe in recipe" :key="recipe._id" >
                    <div class="card mt-4">
                        <div class="card-body">
                            <h2 class="card-title">{{ recipe.title }}</h2><br>
                            <div class="card-subtitle text-muted mb-2">
                                
                            </div>
                            <h4>What is the food all about?</h4>
                            <div class="card-text mb-2" style="width: 470px; text-align: justify;">{{ recipe.description }}</div><br>
                            <h4>Ingredients</h4>
                            <div class="card-text mb-2" style="width: 470px; text-align: justify;">{{ recipe.steps }}</div><br>
                            <h4>Directions</h4>
                            <div class="card-text mb-2" style="width: 470px; text-align: justify;">{{ recipe.directions }}</div>
                            <router-link :to="{name: 'edit', params: { id: recipe._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteRecipe(recipe._id)" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                recipe: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.recipe = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteRecipe(id){
                let apiURL = `http://localhost:4000/api/delete-recipe/${id}`;
                let indexOfArrayItem = this.recipe.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.recipe.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>