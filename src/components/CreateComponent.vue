<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Add New Recipe</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="recipe.title" required type="text" name="title" id="title" class="form-control">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea v-model="recipe.description" required name="description" id="description" class="form-control" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <label for="steps">Ingredients</label>
                    <textarea v-model="recipe.steps" required id="steps" class="form-control" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <label for="directions">Directions</label>
                    <textarea v-model="recipe.directions" required name="directions" id="directions" class="form-control" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                recipe: {
                   title: '',
                   description: '',
                   steps: '',
                   directions: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-recipe';
                
                axios.post(apiURL, this.recipe).then(() => {
                  this.$router.push('/view')
                  this.recipe = {
                    title: '',
                    description: '',
                    steps: '',
                    directions: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>