import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sections: ['Усі відео', 'Документи', 'Теми', 'Автоматизація', 'Рубрики', 'Особистий консультант'],
        categories: [
            {
                title: 'відео', context: [
                    'Усі відео (456)',
                    'Мої відео (15)',
                    'Безкоштовно (45)',
                    'Новинки (34)',
                    'Останні переглянуті (32)',
                    'Мої обрані (14)'
                ], isVideo: true, isRedirect: true
            },
            {
                title: 'КОНСУЛЬТАЦІЇ', context: [], isVideo: false, isRedirect: true,
            },
            {
                title: 'ДОКУМЕНТИ', context: [], isVideo: false, isRedirect: false,
            },
            {
                title: 'ТЕМИ', context: [], isVideo: false, isRedirect: true,
            },
            {
                title: 'Автоматизація', context: [], isVideo: false, isRedirect: true,
            },
            {
                title: 'Лектори', context: [], isVideo: false, isRedirect: true,
            },
            {
                title: 'Рубрики', context: [], isVideo: false, isRedirect: true,
            }
        ],
        pagination: [
            {num: 1, isActive: true},
            {num: 2, isActive: false},
            {num: 3, isActive: false},
            {num: '...', isActive: false},
            {num: 10, isActive: false},
        ]
    },
    getters: {
        getSections: state => state.sections,
        getCategories: state => state.categories,
        getPagination: state => state.pagination,
    },
    mutations: {},
});
