import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Imagenes de 480 x 320

export default new Vuex.Store({
  state: {

    img: 'https://cdn-images-1.medium.com/max/280/1*6QYzbfSAvFDWAt3XCY7Tyw@2x.png',
    project: 'https://i.ytimg.com/vi/CtySquXKxYw/maxresdefault.jpg',
    technologies: [
      'data:image/png;base64,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',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png',
      'https://www.sommelierdecafe.com/2019/wp-content/uploads/2009/06/java-logo1-1.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAyVBMVEX///9BuIM0SV5CvYUzQFw0Rl0zQlxCvoU9t4Eqs3k0R145tn80RF0zPls0tX08t4D3/Po1UWA9nXnp9vBAsoGe17w/p33x+vbi8+s1VGG44c3W7uI2YGXE5tZlw5iv3sc6gG9bwJI7iHI3Z2eM0LBPvYtzyKA2XGQ+o3u949E4cmqJz648knU9mXg5eW0/rX8lPVWUo6hugYoZNlDEzs88kHXP2NhLYm85dWuvvL4hQVWImJ7k6uqksLRbcHsxTV56i5O3wcQJrm9OObwRAAAIdUlEQVR4nOWde0PTPBSH6WCwjTGHt4mKNxQVvKB4RRT1+3+oV5DAXpaenifNadL6/L8lIaW/9jycsLS/XhCWH632tIw2l8LYHKnHWH20jOa/vr80m6BPFMWJeja9g3dBC353oB9iE85+MltausWWvPx6RT+fw1nAgo8P9QOsvGZbPLl1OgL6SFGsPe+rJ9R/H7Di9+D776/B2Z+N8HLIPnR7Q78Hh5/wgj+BLd64zaY+3P47xuMB+tjy3lg9pdFnvOLP+tvW+Au7pgePz8e4Azf5pv6y6x1+hQv+Cra4f5NNfHjHjUIT6ok+oXpHbMHTI/1Xrz7ByeSYTeB1TRLqG1rxN30yjTbhNT2ZSw7ThDoGCybJtHEdTbqYPJwfiX22WN4xSqgf4Ht32BafJ5NjmyYU+E0GCfUBbPHqWzZll0yOB9fQx5ffgITSP16TB+o38Lf4wZWxaEIVIKEOvisX/B08UI/gfC+TyfEU3rw+koSaqhZMkmnlI0ymp4vD0YTa0l+ByoQiybRFk8nzQ38IXxuvk8drTUKhZHrBJju56xvxGdxkklA/FCs2TKbBM++I9+DN6y15DPlQuWCSTCs0me75x9yFm/woakKBJ9cxLPUMdkvGvEETSj/H6oQiydSD8xzeKBv1KXyHegWu6yO5AHRMkulVSKnHy3QdXtfPQUL9FFf8U7/F/efwmh4I496F1/WLWO9QqNQDk2noTSYHLACtkYSSCkCg1NPfY9W8i1KPH5pQN8k71K/SYX+RdyZa6ilJJseunaLonZQNOj0B70y01FOWTI4ZTagYioJIiBM4v2GlJKAFIJJQJTcvewkhg77wz5Lv1y4A2UsImcYVhamEeKlYceOKwlJCXC31+MEJRRTFYkI1IyFkDBXFaCGhpkeGybTvW54HLNE39bu0kFBNSQgZmlA1CkBMQsBkeliyPg/oi/88XocnFCn10GTyl3r8YEURmlCmpZ7t0vV5sFQUW3PjGEqIa7pkcmCJrp957+BSoqNSj1EyOfbhzQtJdFctR3ocSojJooSQoQWgNXB9XigKUOoZbcE6wLrO/MyBFQV/h0LvTLX0uA42QoiisNTjJJkcNKHekgLQqaIw1eMVpR4/VFGAhDorAKWQEDJYopOE+p5IQshQRfGRKIpjsGAqITx6XAeW6EBRjMBL4ohKiPXABfOEIooCsBJVQshAiU4UhZ7IEkLGUlGoiS0hZLBEj79k3AkRlkwOLNFByCqJLyFkLBWFCgsJIVPA6xoUgDT079f6e9MQLBWFAhsJIUMlOlAU1YybTCZH0oTCEqJWMjmoRCcFoArMJIQMluigACQzoj16dZPJYdlFIbJCJUTtZHKgYZmikDCVEDK4ABQnoTZMJYTMA8MCUCnGEkLGUlGUYywhZCz7/EowlxAyM/o3qqCLwg/uhOASQsayi8JLvR69GDxjE6hbAOrvJEsmh6Wi8NCMhJAxlOiLNCQhZLCiqLXHcKy4yeSwVBRXaExCyOAuiuCEwhJiEDmZHI0lVJwevRjQPr+9sITq70Xp0YsB7vMLS6hmJYSMYZ/f3IKblRAyln1+l8AK9SRQj+u4Zdjnd07zEkIG9/nRmxeVEDX0uA7LPr+/W5xAQshgRcE2OYmEkMGKgm1yTsnkMFUUiSSEDFcU+gUnkxAyhooit2RyoEkRiZ5Aj+sw66JIKSFkoKJY+6J7vB6/YckUVULIGB1FaNWjFwMTRUElRCPJ5KBHERaKAlCU45jsMEgorMejSwiZ6IqCSgjDUo8frCiqNtm2Ry8GWFHIN69xSj2uI7aigN8W2glRB6wopE3GyWQjIWRiKgqcTNcaTSYH7qIof7zOR0LIRDuKMCMJIRNNUYwz0OM6IikKKiFM9LiOSIqCdkLYSgiZKEcRRjwo0J4YRxFGPSjQngiKIj8JIYMPerqaUGOaTPYSQqZ2F0WOEkKm5lGEWUoImZp9fidUjzciIWRqFYBylRAyg/A+v2wlhAzu87vcZJxMjZd6/AT3+dGDAhOUevwEJ9SYfa5RCSETqChamEyOsD6/0Rb81DBJqccPPorw9OaVu4SQCVAUGXRC1CGgzy9fPa4DK4qN/CWEDJboeXRC1AEeRVjAl8QkEkKGHvTEiN6jFwOqKBB5JZMDKgpCMgkhQxMKkL7U4wcqCj0JJYQMLgBpSaHHdUBFoSWPUo+XKSwA6RgUGSaT465FQqXS4zoMEirTZHLQApCCXJPJARVFNaY9ejG4Efs3OaUe1wELQJULzjeZLoibUGn1uA6qKERS63EdUFFIJNfjOiImVH6lHj9QUZSTkYSQwYqijGZ69GIQKaHyLPX4ibLgTPS4jigFoNwkhAxUFD6ykxAyuIvCs8UtSSZH7YSatCWZHHUVRcM9ejGoqSjalEyOWgWgzEs9fmolVO6lHj+74QmVrYSQqaEo8pUQMsGKIkM9riNUUZgdFGhPYELlLSFkghKqJaUeP0EFoHYmkyNAomcvIWQCEqqtyeTABaA2SAiRKfxvSa0q9fiBfX7tkBAySFG0OpkcKKHanUwOINFbIyFkZurb9SCHHr0YqBOq9cl0gfrelXqi0VAWgNolIWRUiqJlEkJGpSjaJiFkFIqidRJCZlp5u26hhJCpLAC1UULIVPT5tVJCyFQkVJeSySEmVEslhIyYUG0v9fgRFEVrJYRMuUTPskcvBqUJ1b1kcpQoik6UevyUFIC6Uerx41UUnUwmh1dRtOfvTUPwFIC6U+rx4pPoHU0mx0KfXxckhMwVRdHhZHJcSaguJ5Pjf4qi5Xpcx7yi6IyEkJlLqI4n0wVzV3XqqTTERZ9fF0s9fs4TatAlCSFzXgDqloSQOVMUHZMQMqf/LekfSSbHn4TqbqnHTzH4V5LJsf37n0kmR7Knrf8AbQ77fX5h1q4AAAAASUVORK5CYII=',
    ],
    projectsInfo: [
      {
        id: 1,
        title: 'tuCartel.uy',
        links: {
          github: {
            privado: true,
            link: 'https://github.com/Drolegc/tuCartel',
          },
          link: 'https://tucartel.uy',
        },
        images: {
          img: "https://i.ytimg.com/vi/CtySquXKxYw/maxresdefault.jpg",
          gif: '../files/tucartel.gif',
        },
        description: `
        tuCartel.uy it's a website to connect people how wants signboards
        and people how makes them, offering a quick calculated price for it.
        `,
        litleDescription: 'A website about signboards',
        technologies: [
          'data:image/png;base64,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',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png',
        ],
      },
      {
        id: 2,
        title: 'Record your score',
        links: {
          github: {
            privado: true,
            link: 'https://github.com/Drolegc/C-Json',
          },
          link: '',
        },
        images: {
          img: 'https://i.ytimg.com/vi/CtySquXKxYw/maxresdefault.jpg',
          gif: 'https://media.giphy.com/media/ZdO4NenDbsQNwUwKDB/giphy.gif',
        },
        description: `
        This is a basic console programm to persist data with the library JsonCpp,
        saving the data from the objects to a json file, and creating all the objects
        from the json file when the program start.
        `,
        litleDescription: 'Save your scores with C++ and JSON',
        technologies: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
        ],
      },
      {
        id: 3,
        title: 'Audio to text',
        links: {
          github: {
            privado: true,
            link: 'https://github.com/Drolegc/JavaAudioParse',
          },
          link: '',
        },
        images: {
          img: 'https://i.ytimg.com/vi/CtySquXKxYw/maxresdefault.jpg',
          gif: '../files/audioParse.gif',
        },
        description: `
        The programm shows you the ParseDir directory with your .wav audios from a GUI,
        so you can select one and the it's call a python script (that use Google Speech Recognition)
        and make a txt with the same name as the audio.
        `,
        litleDescription: 'Parse audios to text with Google Speech Recognition',
        technologies: [
          'https://www.sommelierdecafe.com/2019/wp-content/uploads/2009/06/java-logo1-1.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png',
        ],
      },
      {
        id: 4,
        title: 'Change your Twitter Password',
        links: {
          github: {
            privado: true,
            link: 'https://github.com/Drolegc/TwitterChangePass',
          },
          link: '',
        },
        images: {
          img: 'https://i.ytimg.com/vi/CtySquXKxYw/maxresdefault.jpg',
          gif: "https://media.giphy.com/media/ZdO4NenDbsQNwUwKDB/giphy.gif",
        },
        description: `
        With web scrapping you can change your Twitter password account.
        `,
        litleDescription: 'Change your password from terminal',
        technologies: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png',
        ],
      },
      {
        id: 5,
        title: 'UyTube',
        links: {
          github: {
            privado: true,
            link: 'https://github.com/Drolegc/PPA',
          },
          link: '',
        },
        images: {
          img: 'https://i.ytimg.com/vi/CtySquXKxYw/maxresdefault.jpg',
          gif: "https://media.giphy.com/media/ZdO4NenDbsQNwUwKDB/giphy.gif",
        },
        description: `
        This is a project from university, simulating youtube and using Hibernate to persist data.
        `,
        litleDescription: 'Manage users,videos,playlist and more',
        technologies: [
          'https://www.sommelierdecafe.com/2019/wp-content/uploads/2009/06/java-logo1-1.png',
        ],
      },
      {
        id: 6,
        title: 'This portfolio',
        links: {
          github: {
            privado: true,
            link: 'https://github.com/Drolegc/Vue-portfolio',
          },
          link: '/',
        },
        images: {
          img: 'https://i.ytimg.com/vi/CtySquXKxYw/maxresdefault.jpg',
          gif: "https://media.giphy.com/media/ZdO4NenDbsQNwUwKDB/giphy.gif",
        },
        description: `
        My portfolio made with VueJs and Vuex
        `,
        litleDescription: 'This one made with Vue',
        technologies: [
          'data:image/png;base64,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',
        ],
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    img: state => state.img,
    project: state => state.project,
    projectsInfo: state => state.projectsInfo,
    getProjectForId: state => id => state.projects[id],
    technologies: state => state.technologies,
  },

});
