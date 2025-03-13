import eventService from "@/services/EventService"
import participantService from "@/services/ParticipantService"
import { useEventStore } from "@/stores/event"
import { useParticipantStore } from "@/stores/participant"
import EventDetailView from '@/views/event/DetailView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from "@/views/event/LayoutView.vue"
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventListView from '@/views/EventListView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ParticipantDetailView from '@/views/participant/PDetailView.vue'
import ParticipantEditView from '@/views/participant/PEditView.vue'
import ParticipantLayoutView from '@/views/participant/PLayoutView.vue'
import ParticipantRegisterView from '@/views/participant/PRegisterView.vue'
import ParticipantListView from '@/views/ParticipantListView.vue'
import nProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page as string) || 1,
      }),
    },
    {
      path: '/participants',
      name: 'participant-list-view',
      component: ParticipantListView,
      props: (route) => ({
        page: parseInt(route.query.page as string) || 1,
      }),
    },
    {
      path: '/participant/:id',
      name: 'participant-layout-view',
      component: ParticipantLayoutView,
      props: true,
      beforeEnter: (to) => {
          const id = parseInt(to.params.id as string)
          const participantStore = useParticipantStore()
          return participantService
            .getParticipant(id)
            .then((response : any ) => {
              // need to setup the data for the event
              participantStore.setParticipant(response.data)
            })
            .catch((error : any ) => {
              if (error.response && error.response.status === 404) {
                return {
                  name: '404-resource-view',
                  params: { resource: 'event' },
                }
              } else {
                return { name: 'network-error-view' }
              }
            })
        },

      children: [
        {
          path: '',
          name: 'participant-detail-view',
          component: ParticipantDetailView,
          props: true,
        },
        {
          path: 'register',
          name: 'participant-register-view',
          component: ParticipantRegisterView,
          props: true,
        },
        {
          path: 'edit',
          name: 'participant-edit-view',
          component: ParticipantEditView,
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
          const id = parseInt(to.params.id as string)
          const eventStore = useEventStore()
          return eventService
            .getEvent(id)
            .then((response) => {
              // need to setup the data for the event
              eventStore.setEvent(response.data)
            })
            .catch((error) => {
              if (error.response && error.response.status === 404) {
                return {
                  name: '404-resource-view',
                  params: { resource: 'event' },
                }
              } else {
                return { name: 'network-error-view' }
              }
            })
        },

      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true,
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true,
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: EventEditView,
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView,
    },
    {
        path: '/404/:resource',
        name: '404-resource-view',
        component: NotFoundView,
        props: true,
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

router.beforeEach(() => {
    nProgress.start()
  })

  router.afterEach(() => {
    nProgress.done()
  })


export default router // complie แบบ typeSript
