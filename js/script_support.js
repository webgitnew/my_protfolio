<script>
// فحص إذا تم تحميل CSS
if (!document.querySelector('link[href*="w3.css"]')) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/w3.css';
    document.head.appendChild(link);
}
</script>