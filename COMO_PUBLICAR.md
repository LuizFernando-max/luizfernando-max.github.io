# Como publicar este portfólio no GitHub Pages

Este guia te leva do zero até ter seu portfólio no ar em `https://luizfernando-max.github.io` — **100% grátis e permanente**.

---

## Passo 1 — Criar o repositório no GitHub

1. Vá em https://github.com/new (precisa estar logado na sua conta)
2. Em **Repository name**, digite EXATAMENTE assim (com seu próprio username):

   ```
   luizfernando-max.github.io
   ```

   > ⚠️ Esse nome especial é o que faz o GitHub Pages publicar no domínio `https://luizfernando-max.github.io` direto, sem subpasta.

3. Marque a opção **Public** (precisa ser público para o Pages funcionar de graça)
4. **NÃO** marque "Add a README file"
5. Clique em **Create repository**

---

## Passo 2 — Subir os arquivos

A forma mais simples é **arrastar e soltar pelo navegador**:

1. Na tela do repositório recém-criado, clique no link **"uploading an existing file"** (fica no centro da página)
2. Abra a pasta `PortfolioLuizFer/` no seu computador
3. Selecione **TUDO que está dentro** dela (o `index.html`, a pasta `src/`, a pasta `pi_agenda/`, o `curriculo.html`, o `Curriculo_Luiz_Fernando.pdf`)

   > Importante: você sobe o **conteúdo** da pasta, não a pasta em si. O `index.html` precisa ficar na raiz do repositório.

4. Arraste tudo para a área de upload do GitHub
5. Lá embaixo, em **Commit changes**, clique no botão verde **Commit changes**

---

## Passo 3 — Ativar o GitHub Pages

1. No repositório, vá em **Settings** (engrenagem no topo)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **Source**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Clique em **Save**

Aguarde ~1 minuto. Em cima vai aparecer a mensagem:
> ✅ Your site is live at **https://luizfernando-max.github.io**

---

## Pronto!

Seu portfólio agora está disponível em:

| O que | URL |
|---|---|
| 🏠 Portfólio | https://luizfernando-max.github.io |
| 📅 PI Agenda | https://luizfernando-max.github.io/pi_agenda/ |
| 📄 Currículo (visualizar HTML) | https://luizfernando-max.github.io/curriculo.html |
| 📄 Currículo PDF | https://luizfernando-max.github.io/Curriculo_Luiz_Fernando.pdf |

O link no PDF do currículo já aponta para essa URL final, então **não precisa regenerar nada** depois.

---

## Quando quiser atualizar o site

1. Abra o repositório no GitHub
2. Clique no arquivo que quer trocar → ícone de lápis (✏️) → edite e commit
3. Ou suba arquivos novos pelo botão **Add file → Upload files**

A atualização aparece no ar em ~30 segundos.

---

## Dica final: domínio próprio (opcional)

Se um dia quiser um domínio tipo `luizfernando.com.br`, é só comprar em qualquer registrador (Registro.br ~R$40/ano) e apontar pro GitHub Pages em **Settings → Pages → Custom domain**. Não precisa pagar hospedagem.
