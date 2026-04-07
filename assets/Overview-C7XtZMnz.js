import{j as e}from"./iframe-Kds-RheI.js";import{useMDXComponents as o}from"./index-BK_n1eC4.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"cipp-component-library",children:"CIPP Component Library"}),`
`,e.jsx(n.p,{children:"This Storybook documents the shared UI components used across the CIPP frontend. It serves as both visual documentation and a test suite — every story is also a test that runs via vitest."}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run Storybook dev server
npm run storybook

# Run all tests (unit + storybook)
npm run test

# Run only storybook tests
npm run test:storybook

# Run tests with coverage report
npm run test:coverage
`})}),`
`,e.jsx(n.h2,{id:"project-structure",children:"Project Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`src/stories/
  components/           # Stories and tests, mirroring src/components/
    CippCards/           # Card component stories
    CippComponents/      # Shared component stories
    CippTable/           # Table component stories
  fixtures/              # Shared mock data for stories
    property-items.js    # Property list, banner list, info bar data
    form-options.js      # Select/radio/autocomplete option arrays
  layouts/               # Layout stories
  mocks/                 # Next.js module mocks + MSW API handlers
    next-router.js       # Mock useRouter()
    next-navigation.js   # Mock usePathname(), useSearchParams()
    next-head.js         # Mock Head component
    next-image.js        # Mock Image component
    next-link.js         # Mock Link component
    handlers.js          # MSW request handlers for API mocking
    users-10k.json       # Large dataset for table stories
  pages/                 # Page-level stories
  utils/
    form-decorator.jsx   # Storybook decorator for react-hook-form
  test-utils.jsx         # Shared render helpers for vitest unit tests
`})}),`
`,e.jsx(n.h2,{id:"writing-a-new-story",children:"Writing a New Story"}),`
`,e.jsx(n.p,{children:"Stories use CSF3 format. Each story file should:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Live in ",e.jsx(n.code,{children:"src/stories/components/"})," matching the component's source directory"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"tags: ['autodocs']"})," for automatic documentation"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"fn()"})," from ",e.jsx(n.code,{children:"storybook/test"})," for callback props"]}),`
`,e.jsxs(n.li,{children:["Follow the title convention: ",e.jsx(n.code,{children:"Components/CippCards/ComponentName"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { fn } from 'storybook/test'
import { MyComponent } from '../../../components/MyComponent'

export default {
  title: 'Components/CippCards/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    title: 'Example',
    onClick: fn(),
  },
}

export const Loading = {
  args: {
    isFetching: true,
  },
}
`})}),`
`,e.jsx(n.h2,{id:"adding-interaction-tests-play-functions",children:"Adding Interaction Tests (play functions)"}),`
`,e.jsxs(n.p,{children:["Stories can include ",e.jsx(n.code,{children:"play()"}),` functions to test user interactions. These run automatically
in the Storybook UI and as vitest tests via `,e.jsx(n.code,{children:"npm run test:storybook"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { fn, within, expect, userEvent, waitFor } from 'storybook/test'

export const WithActions = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Click me')).toBeVisible()
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tips:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"within(canvasElement)"})," to scope queries to the story"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"within(document.body)"})," for portaled content (dialogs, drawers, menus)"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"waitFor()"})," for content that renders asynchronously"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"args.propName"})," to access ",e.jsx(n.code,{children:"fn()"})," spies for assertion"]}),`
`]}),`
`,e.jsx(n.h2,{id:"mocking-api-calls",children:"Mocking API Calls"}),`
`,e.jsxs(n.p,{children:["API mocks use MSW (Mock Service Worker). Handlers are defined in ",e.jsx(n.code,{children:"src/stories/mocks/handlers.js"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/ListUsers', () => {
    return HttpResponse.json({
      Results: [{ displayName: 'Alice', mail: 'alice@contoso.com' }],
      Metadata: { nextLink: null },
    })
  }),
]
`})}),`
`,e.jsxs(n.p,{children:["These handlers are loaded globally via ",e.jsx(n.code,{children:"preview.jsx"}),". For story-specific overrides, use the ",e.jsx(n.code,{children:"msw"})," parameter:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const CustomApiResponse = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/ListUsers', () => {
          return HttpResponse.json({ Results: [] })
        }),
      ],
    },
  },
}
`})}),`
`,e.jsx(n.h2,{id:"components-that-need-special-setup",children:"Components That Need Special Setup"}),`
`,e.jsx(n.h3,{id:"components-using-usesettings",children:"Components using useSettings()"}),`
`,e.jsxs(n.p,{children:["Already handled — ",e.jsx(n.code,{children:"preview.jsx"})," wraps all stories in ",e.jsx(n.code,{children:"SettingsContext.Provider"}),`
with mock settings (tenant: `,e.jsx(n.code,{children:"testdomain.com"}),", theme: ",e.jsx(n.code,{children:"light"}),")."]}),`
`,e.jsx(n.h3,{id:"components-using-react-hook-form",children:"Components using react-hook-form"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"FormDecorator"})," from ",e.jsx(n.code,{children:"src/stories/utils/form-decorator.jsx"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { FormDecorator } from '../../utils/form-decorator'

export default {
  title: 'Components/CippComponents/MyFormComponent',
  component: MyFormComponent,
  decorators: [FormDecorator],
}

export const Default = {
  args: {
    name: 'fieldName',
    label: 'Field Label',
    type: 'textField',
    defaultValues: { fieldName: 'initial value' },
  },
}
`})}),`
`,e.jsxs(n.p,{children:["The decorator creates a ",e.jsx(n.code,{children:"useForm()"})," context and passes ",e.jsx(n.code,{children:"formControl"})," to your component via args."]}),`
`,e.jsx(n.h3,{id:"components-using-userouter",children:"Components using useRouter()"}),`
`,e.jsxs(n.p,{children:["Already handled — ",e.jsx(n.code,{children:"next/router"})," is aliased to a mock in ",e.jsx(n.code,{children:"src/stories/mocks/next-router.js"}),`
that provides `,e.jsx(n.code,{children:"useRouter()"})," with stub methods (",e.jsx(n.code,{children:"push"}),", ",e.jsx(n.code,{children:"back"}),", ",e.jsx(n.code,{children:"replace"}),", etc.)."]}),`
`,e.jsx(n.h2,{id:"when-to-use-play-tests-vs-unit-tests",children:"When to Use play() Tests vs Unit Tests"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use play() tests in stories when:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Testing visual interactions (clicking buttons, opening menus, expanding accordions)"}),`
`,e.jsx(n.li,{children:"Testing components that need real browser layout (e.g. MRT's row virtualization)"}),`
`,e.jsx(n.li,{children:"Verifying that rendered output looks correct after user interaction"}),`
`,e.jsx(n.li,{children:"The test naturally belongs with the story that demonstrates the feature"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use vitest unit tests when:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Testing logic-heavy behavior (conditional rendering, prop combinations, edge cases)"}),`
`,e.jsx(n.li,{children:"Testing many input variations quickly (unit tests in jsdom are faster than browser tests)"}),`
`,e.jsx(n.li,{children:"Testing components that don't need real DOM layout"}),`
`,e.jsx(n.li,{children:"Testing callback arguments, error states, or complex form validation"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Both contribute to coverage."}),` Play tests run in a real browser (Playwright), unit tests
run in jsdom. Coverage from both is merged when you run `,e.jsx(n.code,{children:"npm run test:coverage"}),"."]}),`
`,e.jsxs(n.p,{children:["As a rule of thumb: if you're writing a story anyway, add a ",e.jsx(n.code,{children:"play()"}),` function to verify the
key behavior. Only write a separate unit test if you need to cover edge cases or prop
combinations that don't warrant their own story.`]}),`
`,e.jsx(n.h2,{id:"writing-unit-tests-vitest",children:"Writing Unit Tests (vitest)"}),`
`,e.jsxs(n.p,{children:["Unit tests live alongside stories in ",e.jsx(n.code,{children:"src/stories/components/"})," with a ",e.jsx(n.code,{children:".test.jsx"}),` extension.
They run in jsdom via `,e.jsx(n.code,{children:"npm run test"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { screen } from '@testing-library/react'
import { renderWithTheme, renderWithProviders } from '../../test-utils'
import { MyComponent } from '../../../components/MyComponent'

describe('MyComponent', () => {
  it('renders title', () => {
    renderWithTheme(<MyComponent title="Hello" />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use which render helper:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"renderWithTheme"})," — component only needs MUI ThemeProvider"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"renderWithProviders"})," — component needs Redux, React Query, SettingsContext, or all of the above"]}),`
`]}),`
`,e.jsx(n.h2,{id:"architecture-notes",children:"Architecture Notes"}),`
`,e.jsx(n.h3,{id:"why-storybookreact-vite-instead-of-storybooknextjs",children:"Why @storybook/react-vite instead of @storybook/nextjs?"}),`
`,e.jsxs(n.p,{children:[`The Next.js framework adapter doesn't work with this project. Instead, we use
`,e.jsx(n.code,{children:"@storybook/react-vite"}),` and manually mock Next.js modules (router, navigation, head, image, link)
via Vite aliases in `,e.jsx(n.code,{children:".storybook/main.mjs"}),"."]}),`
`,e.jsx(n.h3,{id:"why-js-files-need-jsx-loader-config",children:"Why .js files need JSX loader config?"}),`
`,e.jsxs(n.p,{children:["The codebase uses JSX syntax in ",e.jsx(n.code,{children:".js"})," files (not ",e.jsx(n.code,{children:".jsx"}),`). Vite's esbuild only handles JSX
in `,e.jsx(n.code,{children:".jsx"})," files by default, so both ",e.jsx(n.code,{children:".storybook/main.mjs"})," and ",e.jsx(n.code,{children:"vitest.config.mjs"}),` override the
esbuild loader to treat `,e.jsx(n.code,{children:".js"})," files as JSX."]}),`
`,e.jsx(n.h3,{id:"how-storybook-tests-contribute-to-coverage",children:"How storybook tests contribute to coverage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@storybook/addon-vitest"}),` plugin converts stories into vitest browser tests
(Playwright/Chromium). Running `,e.jsx(n.code,{children:"npm run test:coverage"}),` includes both unit tests (jsdom) and
storybook tests (real browser), with coverage merged into a single report.`]}),`
`,e.jsx(n.h3,{id:"suppressed-warnings-explained",children:"Suppressed warnings explained"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"MODULE_LEVEL_DIRECTIVE"})})," in ",e.jsx(n.code,{children:".storybook/main.mjs"})," — Libraries like ",e.jsx(n.code,{children:"@mui/material"}),` include
`,e.jsx(n.code,{children:'"use client"'}),` directives for React Server Components. These are harmless in Storybook
(everything is client-side) but Rollup treats them as warnings during build.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onUnhandledRequest: 'bypass'"})})," in ",e.jsx(n.code,{children:".storybook/preview.jsx"}),` — MSW intercepts all network
requests including Vite's internal module imports (`,e.jsx(n.code,{children:"*.json?import"}),`). Without bypass, every
JSON data file import logs a noisy warning.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"process.env"})," / ",e.jsx(n.code,{children:"global"})," defines"]})," in ",e.jsx(n.code,{children:".storybook/main.mjs"}),` — Next.js code references
`,e.jsx(n.code,{children:"process.env"})," and ",e.jsx(n.code,{children:"global"}),` which don't exist in a Vite browser context. These are shimmed to
empty objects / `,e.jsx(n.code,{children:"window"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"ResizeObserver"})," mock"]})," in ",e.jsx(n.code,{children:"vitest.setup.js"}),` — jsdom doesn't implement ResizeObserver. MUI
and MRT components use it, so unit tests need a no-op stub.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"getComputedStyle"})," suppression"]})," in ",e.jsx(n.code,{children:"vitest.setup.js"}),` — jsdom logs "Not implemented" warnings
when MUI calls `,e.jsx(n.code,{children:"getComputedStyle()"}),` with pseudo-elements. These are harmless and suppressed to
reduce test noise.`]}),`
`]})]})}function d(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default};
