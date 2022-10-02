
import { HeaderOnly, HeaderDefault } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Introduce from '~/pages/Introduce';
import { upload } from '@testing-library/user-event/dist/upload';

// khi người ta không login cũng đọc được
const publicRoutes = [
    //Layout Default
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    // Layout chỉ có Header thôi 
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/introduce', component: Introduce, header: HeaderDefault},

]
// khi người ta login mới đọc được
const privateRoutes =  [

]

export {publicRoutes, privateRoutes}