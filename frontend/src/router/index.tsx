import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layouts/app-layout'
import { JMAlbumDetailPage } from '../pages/jm-album-detail-page'
import { JMAlbumListPage } from '../pages/jm-album-list-page'
import { JMReaderPage } from '../pages/jm-reader-page'
import { LoginPage } from '../pages/login-page'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/jm" replace />} />
        <Route path="/jm" element={<JMAlbumListPage />} />
        <Route path="/jm/:albumId" element={<JMAlbumDetailPage />} />
        <Route path="/jm/:albumId/read/:chapterId" element={<JMReaderPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/jm" replace />} />
    </Routes>
  )
}
