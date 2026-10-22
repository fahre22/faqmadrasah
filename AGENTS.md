<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep FAQ content and search filtering in a browser-safe data module, separate from the page, so categories and search share one source.
- Keep FAQ presentation tokens and named styles in the global design system so the uploaded design remains consistent.
- Never copy secrets from uploaded source into browser code; AI service integration requires a separately authorized secure server implementation.
- Pre-optimize React and route-split FAQ UI dependencies in Vite so first-use discovery does not mix React module generations in an open preview.
- Keep the homepage announcement carousel in an isolated component using uploaded asset pointers and a hydration-opened dialog so SSR stays consistent and module pages remain unaffected.
