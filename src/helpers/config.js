export const config = {
  project: {
    name: "Luvenda",
    slogan: "Find your dream home",
    description:
      "At Luvenda Home, we believe that real estate should be accessible to everyone. We are dedicated to helping you find the perfect home. Join us on this adventure. Let us help you find your dream home.",
    version: "1.0.0",
  },
  contact: {
    phone1: "+1 (212) 489-4335",
    email: "Luvenda@gmail.com",
    address: "Queensberry Street, North Melbourne VIC 3051, Australia",
    website: "",
    mapURL: "https://maps.app.goo.gl/95BydZ75KcKKvzBC6",
    mapEmbedURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.096278969!2d144.95287577555067!3d-37.80374193346481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d31639fb579%3A0xec571891854b2d49!2sQueensberry%20St%2C%20Melbourne%20VIC%2C%20Australia!5e1!3m2!1sen!2str!4v1724231133642!5m2!1sen!2str",
    socialMedia: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
  mapApi: {
    GOOGLE_MAPS_API_KEY: "AIzaSyB8SvK1CoRyIKzl9Waj5_mPjYq7edYPAKw",
  },
  api: {
    /*  baseUrl: "http://localhost:8080",  */
    baseUrl: "https://realestate-backend-g6-t2-4cd45baad71b.herokuapp.com",
  },
  userRightsOnRoutes: [
    { urlRegex: /\/dashboard$/, roles: ["ADMIN", "MANAGER", "CUSTOMER"] },

    { urlRegex: /\/dashboard\/admin$/, roles: ["ADMIN"] },
    {
      urlRegex: /\/dashboard\/admin\/new$/,
      roles: ["ADMIN"],
    },
    {
      urlRegex: /\/dashboard\/advert$/,
      roles: ["ADMIN", "MANAGER", "CUSTOMER"],
    },
    { urlRegex: /\/dashboard\/advert\/new$/, roles: ["ADMIN", "MANAGER"] },
    { urlRegex: /\/dashboard\/advert\/[0-9]+$/, roles: ["ADMIN", "MANAGER"] },
    {
      urlRegex: /\/dashboard\/adverts$/,
      roles: ["CUSTOMER"],
    },
    { urlRegex: /\/dashboard\/adverts\/new$/, roles: ["CUSTOMER"] },
    { urlRegex: /\/dashboard\/adverts\/[0-9]+$/, roles: ["CUSTOMER"] },
    { urlRegex: /\/dashboard\/categories$/, roles: ["ADMIN", "MANAGER"] },
    { urlRegex: /\/dashboard\/categories\/new$/, roles: ["ADMIN", "MANAGER"] },
    {
      urlRegex: /\/dashboard\/categories\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER"],
    },

    {
      urlRegex: /\/dashboard\/categories\/property-key$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/categories\/property-key\/new\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/categories\/property-key\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/categories\/property-key\/edit\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER"],
    },

    { urlRegex: /\/dashboard\/advert-types$/, roles: ["ADMIN", "MANAGER"] },
    {
      urlRegex: /\/dashboard\/advert-types\/new$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/advert-types\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/customer$/,
      roles: ["ADMIN", "MANAGER", "CUSTOMER"],
    },
    {
      urlRegex: /\/dashboard\/customer\/advert\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER", "CUSTOMER"],
    },
    {
      urlRegex: /\/dashboard\/customer\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER", "CUSTOMER"],
    },
    { urlRegex: /\/dashboard\/manager$/, roles: ["ADMIN", "MANAGER"] },
    {
      urlRegex: /\/dashboard\/manager\/new$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/manager\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/tour-requests$/,
      roles: ["ADMIN", "MANAGER"],
    },

    {
      urlRegex: /\/dashboard\/tour-requests\/new$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/tour-requests\/[0-9]+$/,
      roles: ["ADMIN", "MANAGER"],
    },

    { urlRegex: /\/dashboard\/reports$/, roles: ["ADMIN", "MANAGER"] },
    { urlRegex: /\/dashboard\/contact-messages$/, roles: ["ADMIN", "MANAGER"] },
    {
      urlRegex: /\/dashboard\/contact-messages\/send-mail$/,
      roles: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/settings$/,
      roles: ["ADMIN"],
    },
    {
      urlRegex: /\/dashboard\/account$/,
      roles: [ "CUSTOMER"],
    },
    { urlRegex: /\/dashboard\/mail$/, roles: ["ADMIN", "MANAGER"] },
    { urlRegex: /\/dashboard\/mail\/new$/, roles: ["ADMIN", "MANAGER"] },

    { urlRegex: /\/dashboard\/my-profile$/, roles: ["MANAGER", "CUSTOMER"] },
    {
      urlRegex: /\/dashboard\/update-password$/,
      roles: ["MANAGER", "CUSTOMER"],
    },
    { urlRegex: /\/dashboard\/favorites$/, roles: ["CUSTOMER"] },
    { urlRegex: /\/dashboard\/my-tour$/, roles: ["CUSTOMER"] },
    { urlRegex: /\/dashboard\/my-tour\/request$/, roles: ["CUSTOMER"] },
  ],
};
