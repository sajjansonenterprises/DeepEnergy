import type { Schema, Struct } from '@strapi/strapi';

export interface AllPageAbout extends Struct.ComponentSchema {
  collectionName: 'components_all_page_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    breadcrumb: Schema.Attribute.Component<'page-component.bread-crumb', false>;
    ctaButtonText: Schema.Attribute.Component<'pagesetting.links', false>;
    ctaDescription: Schema.Attribute.String;
    ctaTitle: Schema.Attribute.String;
    missionVision: Schema.Attribute.Component<
      'pagesetting.title-and-description',
      true
    >;
    videoTitle: Schema.Attribute.String;
    whyChooseUs: Schema.Attribute.Component<
      'pagesetting.title-and-description',
      true
    >;
    whyChooseUsTitle: Schema.Attribute.String;
  };
}

export interface AllPageAllPage extends Struct.ComponentSchema {
  collectionName: 'components_all_page_all_pages';
  info: {
    description: '';
    displayName: 'Home';
  };
  attributes: {
    About: Schema.Attribute.Component<'page-component.about', false>;
    Article: Schema.Attribute.Component<'page-component.article', false>;
    Brand: Schema.Attribute.Component<'page-component.brand', false>;
    Contact: Schema.Attribute.Component<'page-component.contact', false>;
    Header: Schema.Attribute.Component<
      'page-component.header-slidder-home',
      true
    >;
    Project: Schema.Attribute.Component<'page-component.project', false>;
    Quote: Schema.Attribute.Component<'all-page.quote', false>;
    Service: Schema.Attribute.Component<'page-component.service', false>;
    Testimonial: Schema.Attribute.Component<
      'page-component.testimonial',
      false
    >;
  };
}

export interface AllPageQuote extends Struct.ComponentSchema {
  collectionName: 'components_all_page_quotes';
  info: {
    description: '';
    displayName: 'Quote';
  };
  attributes: {
    Advantage1: Schema.Attribute.String;
    Advantage2: Schema.Attribute.String;
    Advantage3: Schema.Attribute.String;
    Advantage4: Schema.Attribute.String;
    Advantage5: Schema.Attribute.String;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    LearnMore: Schema.Attribute.Component<'pagesetting.links', false>;
    OurCoreValues: Schema.Attribute.Component<'pagesetting.links', false>;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentAbout extends Struct.ComponentSchema {
  collectionName: 'components_page_component_abouts';
  info: {
    description: '';
    displayName: 'about';
    icon: 'information';
  };
  attributes: {
    happyClient: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ourMission: Schema.Attribute.Text;
    ourVission: Schema.Attribute.String;
    readMoreUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whoWeAre: Schema.Attribute.Text;
    whyChooseUs: Schema.Attribute.String;
  };
}

export interface PageComponentArticle extends Struct.ComponentSchema {
  collectionName: 'components_page_component_articles';
  info: {
    description: '';
    displayName: 'Article';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    heading: Schema.Attribute.String;
  };
}

export interface PageComponentBrand extends Struct.ComponentSchema {
  collectionName: 'components_page_component_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    brand_collabs: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    heading: Schema.Attribute.String;
  };
}

export interface PageComponentBreadCrumb extends Struct.ComponentSchema {
  collectionName: 'components_page_component_bread_crumbs';
  info: {
    description: '';
    displayName: 'BreadCrumb';
  };
  attributes: {
    bg_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'pagesetting.links', false>;
    description: Schema.Attribute.Text;
    pageTitle: Schema.Attribute.String;
    videoButton: Schema.Attribute.Component<'pagesetting.links', false>;
    whoWeAreDescription: Schema.Attribute.Text;
    whoWeAreHeading: Schema.Attribute.String;
    whoWeAreImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    whoWeAreTitle: Schema.Attribute.String;
  };
}

export interface PageComponentBreadcrumb1 extends Struct.ComponentSchema {
  collectionName: 'components_page_component_breadcrumb1s';
  info: {
    description: '';
    displayName: 'Breadcrumb1';
  };
  attributes: {
    bg_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Button1: Schema.Attribute.Component<'pagesetting.links', false>;
    Button2: Schema.Attribute.Component<'pagesetting.links', false>;
    description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface PageComponentCard extends Struct.ComponentSchema {
  collectionName: 'components_page_component_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    city_country: Schema.Attribute.String;
    EmailAdress: Schema.Attribute.Email;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'pagesetting.links', false>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    phoneNumber: Schema.Attribute.BigInteger;
  };
}

export interface PageComponentCard1 extends Struct.ComponentSchema {
  collectionName: 'components_page_component_card1s';
  info: {
    description: '';
    displayName: 'card1';
  };
  attributes: {
    Facebook: Schema.Attribute.Component<'pagesetting.links', false>;
    Linkedin: Schema.Attribute.Component<'pagesetting.links', false>;
    Name: Schema.Attribute.String;
    Position: Schema.Attribute.String;
    profilePic: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    twitter: Schema.Attribute.Component<'pagesetting.links', false>;
  };
}

export interface PageComponentContact extends Struct.ComponentSchema {
  collectionName: 'components_page_component_contacts';
  info: {
    description: '';
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card1: Schema.Attribute.Component<'pagesetting.card', false>;
    card2: Schema.Attribute.Component<'pagesetting.card', false>;
    card3: Schema.Attribute.Component<'pagesetting.card', false>;
    card4: Schema.Attribute.Component<'pagesetting.card', false>;
    getStarted: Schema.Attribute.Component<'pagesetting.button', false>;
    heading: Schema.Attribute.String;
    ourPlans: Schema.Attribute.Component<'pagesetting.button', false>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentExperienceAndTestimonial
  extends Struct.ComponentSchema {
  collectionName: 'components_page_component_experience_and_testimonials';
  info: {
    displayName: 'ExperienceAndTestimonial';
  };
  attributes: {
    ExpYear: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentHeaderSlidderHome extends Struct.ComponentSchema {
  collectionName: 'components_page_component_header_slidder_homes';
  info: {
    description: '';
    displayName: 'headerSlidderHome';
    icon: 'house';
  };
  attributes: {
    heading: Schema.Attribute.String;
    ourMission: Schema.Attribute.Text;
    slidderImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentProject extends Struct.ComponentSchema {
  collectionName: 'components_page_component_projects';
  info: {
    description: '';
    displayName: 'Project';
  };
  attributes: {
    heading: Schema.Attribute.String;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentService extends Struct.ComponentSchema {
  collectionName: 'components_page_component_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_page_component_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface PagePage extends Struct.ComponentSchema {
  collectionName: 'components_page_pages';
  info: {
    displayName: 'Page';
    icon: 'book';
  };
  attributes: {
    buildpage: Schema.Attribute.Blocks;
  };
}

export interface PagesettingAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_advantages';
  info: {
    displayName: 'Advantage';
  };
  attributes: {
    a1: Schema.Attribute.String;
    a2: Schema.Attribute.String;
    a3: Schema.Attribute.String;
  };
}

export interface PagesettingButton extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PagesettingCard extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.String;
    fontAwesomeTag: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PagesettingContact extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    mapEmbedUrl: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface PagesettingDropdown extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_dropdowns';
  info: {
    displayName: 'dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface PagesettingFooter extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'pagesetting.contact', false>;
    copyright: Schema.Attribute.String;
    sections: Schema.Attribute.Component<'pagesetting.sections', true>;
    socials: Schema.Attribute.Component<'pagesetting.socials', false>;
  };
}

export interface PagesettingIsDropdown extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_is_dropdowns';
  info: {
    displayName: 'isDropdown';
  };
  attributes: {};
}

export interface PagesettingLinks extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PagesettingNavbar extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'book';
  };
  attributes: {
    dropdown: Schema.Attribute.Component<'pagesetting.dropdown', true>;
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface PagesettingPath extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_paths';
  info: {
    displayName: 'path';
    icon: 'link';
  };
  attributes: {
    path: Schema.Attribute.String;
  };
}

export interface PagesettingSections extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_sections';
  info: {
    description: '';
    displayName: 'sections';
  };
  attributes: {
    links: Schema.Attribute.Component<'pagesetting.links', true>;
    title: Schema.Attribute.String;
  };
}

export interface PagesettingSeo extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_seos';
  info: {
    description: '';
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagesettingSocials extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface PagesettingTitleAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_pagesetting_title_and_descriptions';
  info: {
    displayName: 'title&description';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'all-page.about': AllPageAbout;
      'all-page.all-page': AllPageAllPage;
      'all-page.quote': AllPageQuote;
      'page-component.about': PageComponentAbout;
      'page-component.article': PageComponentArticle;
      'page-component.brand': PageComponentBrand;
      'page-component.bread-crumb': PageComponentBreadCrumb;
      'page-component.breadcrumb1': PageComponentBreadcrumb1;
      'page-component.card': PageComponentCard;
      'page-component.card1': PageComponentCard1;
      'page-component.contact': PageComponentContact;
      'page-component.experience-and-testimonial': PageComponentExperienceAndTestimonial;
      'page-component.header-slidder-home': PageComponentHeaderSlidderHome;
      'page-component.project': PageComponentProject;
      'page-component.service': PageComponentService;
      'page-component.testimonial': PageComponentTestimonial;
      'page.page': PagePage;
      'pagesetting.advantage': PagesettingAdvantage;
      'pagesetting.button': PagesettingButton;
      'pagesetting.card': PagesettingCard;
      'pagesetting.contact': PagesettingContact;
      'pagesetting.dropdown': PagesettingDropdown;
      'pagesetting.footer': PagesettingFooter;
      'pagesetting.is-dropdown': PagesettingIsDropdown;
      'pagesetting.links': PagesettingLinks;
      'pagesetting.navbar': PagesettingNavbar;
      'pagesetting.path': PagesettingPath;
      'pagesetting.sections': PagesettingSections;
      'pagesetting.seo': PagesettingSeo;
      'pagesetting.socials': PagesettingSocials;
      'pagesetting.title-and-description': PagesettingTitleAndDescription;
    }
  }
}
