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
        ],
        videos: [],
        defaultVideos: [],
        appearance: ''
    },
    getters: {
        getSections: state => state.sections,
        getCategories: state => state.categories,
        getPagination: state => state.pagination,
        getVideos: state => state.videos,
        getAppearance: state => state.appearance,
    },
    mutations: {
        setVideos: (state, payload) => state.videos = payload,
        setDefaultVideos: (state, payload) => state.defaultVideos = payload,
        setInitialAppearance: (state) => {
            if(localStorage.getItem('appearance-videos')) {
                state.appearance = localStorage.getItem('appearance-videos')
            } else {
                localStorage.setItem('appearance-videos', 'grid')
                state.appearance = 'grid'
            }
        },
        setChangeAppearance: (state, payload) => {
                localStorage.setItem('appearance-videos', payload)
                state.appearance = payload
        },
        setPagination: (state, payload) => state.pagination = payload,
        setSearchVideo: (state, payload) => {
            state.videos = state.defaultVideos.filter(el => el.title.toLowerCase().includes(payload.toLowerCase()))
        }
    },
    actions: {
        async fetchVideos(ctx) {
            const res = await fetch(
                'https://storage.7eminar.ua/content/test_task_front/data.json'
            )
            const videos = await res.json()
            ctx.commit('setVideos', videos)
            ctx.commit('setDefaultVideos', videos)
        }
    }
});
