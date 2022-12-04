<template>
    <div>
        <div class="card-header">ID: #{{ id }}</div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>
                    {{ commentText }}
                </p>

                <footer>
                    <!-- Like comment -->
                    <button
                        type="submit"
                        class="btn btn-dark m-1"
                        v-on:click="isLikeComment(comment)"
                        v-show="true">

                        <i class="fa fa-heart" v-if="liked"></i>
                        <i
                        class="fa fa-heartbeat"
                        v-if="!liked">
                        </i>
                    </button>

                    <!-- Eddit comment -->
                    <button
                        class="btn btn-info m-1"
                        @click="openCloseModalEdit(comment.attributes, id)"
                        v-show="true">
                        <i class="fa fa-pen"></i>
                    </button>

                    <!-- Delete comment -->
                    <button
                        class="btn btn-danger m-1"
                        @click="clickDeleteComment(id, this.store.jwt)"
                        v-show="store.logged">
                        <i class="fa fa-trash"></i>
                    </button>
                </footer>
            </blockquote>
        </div>
    </div>
</template>

<script>

import { userStore } from "../store/storeUser";

    export default{
        name: 'CommentLayout',
        props: ['id', 'commentText', 'comment', 'liked', 'isLikeComment', 'openCloseModalEdit', 'clickDeleteComment'],
        data(){
            const store = userStore()

            return { store }
        }
        
    }

</script>