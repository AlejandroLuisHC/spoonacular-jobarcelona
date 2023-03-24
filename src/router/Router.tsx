import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreProvider from '../helper/providers/StoreProvider'
import Spinner from '../components/general_components/Spinner'

// Lazy import components
const Layout = lazy(() => import('./Layout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const RecipesDashboard = lazy(() => import('../pages/RecipesDashboard'))
const RecipeExtended = lazy(() => import('../pages/RecipeExtended'))

const Router = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="/recipes/:type" element={<RecipesDashboard />} />
                            <Route path="/recipes/:type/:id" element={<RecipeExtended />} />
                            <Route path="*" element={<p>Error 404: Page not found</p>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default Router