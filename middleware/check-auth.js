export default ({ store, req }) => {
  console.log(
    '%c [Middleware] check auth!',
    'font-size: 20px; font-weight: bold'
  )
  store.dispatch('initAuth', req)
}