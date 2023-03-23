import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreProvider from '../helper/providers/StoreProvider'

// Lazy import components
const Layout = lazy(() => import('./Layout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

const Router = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="/recipes/:type" element={<p>Recipes</p>} />
                            <Route path="/recipe/:id" element={<p>Recipe</p>} />
                            <Route path="*" element={<p>Error 404: Page not found</p>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default Router