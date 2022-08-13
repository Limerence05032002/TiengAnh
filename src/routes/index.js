
import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// khi người ta không login cũng đọc được
const publicRoutes = [
    //Layout Default
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    // Layout chỉ có Header thôi 
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},

]
// khi người ta login mới đọc được
const privateRoutes =  [

]

export {publicRoutes, privateRoutes}