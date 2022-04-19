import Main from "../Main/Main";
import Contact from "../Contact/Contact";
import AboutPage from "../About/AboutPage";
import Architecture from "../Architecture/Architecture";
import ArchitectureById from "../Architecture/ArchitectureById";
import Building from "../Building/Building";
import BuildingById from "../Building/BuildingById";
import Design from "../Design/Design";
import DesignById from "../Design/DesignById/DesignById";
import VrImage from "../vr_image/VrImage";

export const ContactUrl = "/contact"
export const AboutUrl = "/about"
export const ArchUrl = "/architecture"
export const ArchByIDUrl = "/architectureById/:id"
export const BuildUrl = "/building"
export const BuildByIDUrl = "/buildingById/:id"
export const DesignUrl = "/design"
export const DesignByIDUrl = "/designById/:id"
export const VrImageUrl = "/vr-image"
export const MainUrl = "/"

export const  urls = [
    {
        slug: MainUrl,
        component: Main
    },
    {
        slug: ContactUrl,
        component: Contact
    },
    {
        slug: AboutUrl,
        component: AboutPage
    },
    {
        slug: ArchUrl,
        component: Architecture
    },
    {
        slug: ArchByIDUrl,
        component: ArchitectureById
    },
    {
        slug: BuildUrl,
        component: Building
    },
    {
        slug: BuildByIDUrl,
        component: BuildingById
    },
    {
        slug: DesignUrl,
        component: Design
    },
    {
        slug: DesignByIDUrl,
        component: DesignById
    },
    {
        slug: VrImageUrl,
        component: VrImage
    }
]

export const urlsWithTitle = [
    {
        slug: MainUrl,
        title: "Главная"
    },
    {
        slug: MainUrl,
        title: "Архитектура"
    },
    {
        slug: MainUrl,
        title: "Строительство"
    },
    {
        slug: MainUrl,
        title: "Дизайн"
    },
    {
        slug: MainUrl,
        title: "О нас"
    },
    {
        slug: MainUrl,
        title: "Контакты"
    },
]
