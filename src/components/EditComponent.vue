<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Recipe</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="recipe.title" required type="text" name="title" id="title" class="form-control">
                </div>
                <div class="form-group">
                    <label for="description">What is this food all about?</label>
                    <textarea v-model="recipe.description" required name="description" id="description" class="form-control" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <label for="steps">Ingredients</label>
                    <textarea v-model="recipe.steps" required id="steps" class="form-control" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <label for="directions">Directions</label>
                    <textarea v-model="recipe.directions" required id="directions" class="form-control" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
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
            recipe: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-recipe/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.recipe = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-recipe/${this.$route.params.id}`;
            axios.put(apiURL, this.recipe).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>