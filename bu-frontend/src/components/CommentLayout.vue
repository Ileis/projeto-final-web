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
                        class="btn btn-dark"
                        v-on:click="isLikeComment(comment)">

                        <i class="fa fa-heart" v-if="liked"></i>
                        <i
                        class="fa fa-heartbeat"
                        v-if="!liked">
                        </i>
                    </button>

                    <!-- Eddit comment -->
                    <button
                        class="btn btn-info my-1"
                        @click="openCloseModalEdit(comment.attributes, id)">
                        <i class="fa fa-pen"></i>
                    </button>

                    <!-- Delete comment -->
                    <button
                        class="btn btn-danger my-1"
                        @click="clickDeleteComment(id)">
                        <i class="fa fa-trash"></i>
                    </button>
                </footer>
            </blockquote>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'CommentLayout',
        props: ['id', 'commentText', 'comment', 'liked', 'isLikeComment', 'openCloseModalEdit', 'clickDeleteComment']
    }

</script>