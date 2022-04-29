export { default as Navbar } from '../../components/Navbar.vue'
export { default as Post } from '../../components/Post.vue'
export { default as PostList } from '../../components/PostList.vue'
export { default as AdminPostForm } from '../../components/Admin/AdminPostForm.vue'

export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/Navbar'}" */).then(c => c.default || c)
export const LazyPost = import('../../components/Post.vue' /* webpackChunkName: "components/Post'}" */).then(c => c.default || c)
export const LazyPostList = import('../../components/PostList.vue' /* webpackChunkName: "components/PostList'}" */).then(c => c.default || c)
export const LazyAdminPostForm = import('../../components/Admin/AdminPostForm.vue' /* webpackChunkName: "components/Admin/AdminPostForm'}" */).then(c => c.default || c)
