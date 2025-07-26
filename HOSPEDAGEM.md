# Instruções de Hospedagem - Hostinger

## 📁 Arquivos para Upload

Para hospedar o projeto no seu domínio `nioac.com/wallmart`, você precisará fazer upload dos seguintes arquivos:

### Arquivos Principais:
- `index.html` - Página inicial do subdiretório
- `demo.html` - Projeto principal completo
- `script.js` - JavaScript do projeto
- `styles.css` - Estilos CSS
- `README.md` - Documentação

### Dados (Opcional):
- `*.csv` - Arquivos de dados
- `*.xlsx` - Planilhas Excel

## 🚀 Passos para Hospedagem na Hostinger

### 1. Acesso ao Painel da Hostinger
1. Faça login no painel da Hostinger
2. Vá para "Gerenciador de Arquivos" ou "File Manager"
3. Navegue até a pasta `public_html` do seu domínio

### 2. Criar Subdiretório
1. Dentro de `public_html`, crie uma pasta chamada `wallmart`
2. Entre na pasta `wallmart`

### 3. Upload dos Arquivos
1. Faça upload dos arquivos principais:
   - `index.html`
   - `demo.html`
   - `script.js`
   - `styles.css`
   - `README.md`

### 4. Configurar Permissões
1. Certifique-se de que os arquivos tenham permissão 644
2. As pastas devem ter permissão 755

### 5. Testar
1. Acesse `https://nioac.com/wallmart`
2. Verifique se o projeto carrega corretamente

## 🔧 Configurações Adicionais

### .htaccess (Opcional)
Crie um arquivo `.htaccess` na pasta `wallmart` com:

```apache
DirectoryIndex index.html demo.html
Options -Indexes

# Cache para arquivos estáticos
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 day"
</IfModule>

# Compressão GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

## 📱 URLs de Acesso

Após a hospedagem, seu projeto estará disponível em:
- **Principal**: https://nioac.com/wallmart
- **Demo direto**: https://nioac.com/wallmart/demo.html

## ⚠️ Observações Importantes

1. **Tempo de Propagação**: Pode levar até 24h para o site ficar totalmente acessível
2. **Cache**: Limpe o cache do navegador se não ver as mudanças
3. **HTTPS**: A Hostinger geralmente fornece SSL gratuito
4. **Backup**: Sempre mantenha backup dos arquivos localmente

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs de erro no painel da Hostinger
2. Teste os arquivos localmente primeiro
3. Entre em contato com o suporte da Hostinger se necessário