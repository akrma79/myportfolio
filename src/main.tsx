@@ .. @@
 import { createRoot } from 'react-dom/client';
 import App from './App.tsx';
 import './index.css';
+import { register as registerSW } from './utils/serviceWorker';

 createRoot(document.getElementById('root')!).render(
@@ .. @@
   </StrictMode>
 );
+
+// Register service worker for offline support
+registerSW();