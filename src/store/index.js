import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    recipes: [{
        slug: 'kastu-curry',
        title: 'kastu Curry',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon alive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder'
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often ,until softened, about 5 minutes.',
          'Add curry powder and cook,stirring, until fragment,about 1 minute.',
          'Add chicken and potatoes and cook,stirring, until heated through, about 5 minutes.',
        ]
      },
      {
        slug: 'ramen-noodle-soup',
        title: 'ramen-noodle-soup',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon alive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder'
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often ,until softened, about 5 minutes.',
          'Add curry powder and cook,stirring, until fragment,about 1 minute.',
          'Add chicken and potatoes and cook,stirring, until heated through, about 5 minutes.',
        ]
      }
    ]
  },
  // getters: {},
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
    }
  },
  // actions: {},
  // modules: {}
})