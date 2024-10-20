import {Logo} from "../../helper/Content/Logo.jsx";
import {createMenu} from "../../data/menu/nav.jsx";
import {helperCenterMenu} from "../../data/menu/helperCenterMenu.jsx";
import SocialFooter from "../../components/Layout/Footer/SocialFooter.jsx";
import CopyrightFooter from "../../components/Layout/Footer/CopyrightFooter.jsx";
import FooterItemsBlock from "../../components/Layout/Footer/FooterItemsBlock.jsx";

export const footerConfig = (auth, t) => [
    {
        component: Logo,
        props: {
            hasColor: false,
            t: t,
        },
    },
    {
        component: FooterItemsBlock,
        props: {
            title: t('investor'),
            menu: createMenu({auth, t}),
        },
    },
    {
        component: FooterItemsBlock,
        props: {
            title: t('help_center'),
            menu: helperCenterMenu(),
        },
    },
    {
        component: SocialFooter,
        props: {
            title: t('follow'),
            description: t('new_features'),
        },
    },
    {
        component: CopyrightFooter,
        props: {
            title: t('title'),
            copyright: t('copyright'),
        },
        wrapperClass: "layout",
    },
];
