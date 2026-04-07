import{j as e}from"./iframe-Kds-RheI.js";import{T as O,b as F,c as D,d as a,e as E,g as k}from"./CippPropertyListCard-B69cU4cl.js";import{P as C}from"./Card-Dv1M4W2j.js";import{T as P}from"./Typography--MlFd96o.js";import{B as M}from"./Box-2Y34SUcf.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-6Wy2TrQ_.js";import"./listItemButtonClasses-yPh6NX7X.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./ListItemIcon-D3N0JPYR.js";import"./CippPropertyList-BK5becvN.js";import"./CippCopyToClipboard-CKsZoX9K.js";import"./useTheme-BssS5EDL.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./IconButton-BP1WbM1J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CqmdIrg0.js";import"./createSvgIcon-B1PB8NQb.js";import"./Chip-CyeE901q.js";import"./ListItem-WfH4nH2e.js";import"./isMuiElement-B0676mKz.js";import"./Button-C625JZN7.js";import"./Stack-B3YVI2gW.js";import"./ApiCall--xjQy2aX.js";import"./styled-BXFJWb_j.js";import"./CippCodeBlock-BCx0ti8E.js";import"./use-settings-C0L3nlzW.js";import"./CippButtonCard-3UVL4iP-.js";import"./CardHeader-Dx8ZXv6f.js";import"./Divider-Cs7kLfLE.js";import"./CardActions-BvF0OaHR.js";import"./next-link-D57Jeldp.js";import"./CippTimeAgo-z88BFROf.js";import"./Link--Y64UtRa.js";import"./UsersIcon-CJUa3bnw.js";import"./CippFormCondition-Bd3-ef2F.js";import"./index-BMFQDhFT.js";const{fn:xe,within:Pe,expect:Te}=__STORYBOOK_MODULE_TEST__,U=({cases:w})=>e.jsx(C,{sx:{p:2},children:e.jsxs(O,{size:"small",children:[e.jsx(F,{children:e.jsxs(D,{children:[e.jsx(a,{children:e.jsx("strong",{children:"cellName"})}),e.jsx(a,{children:e.jsx("strong",{children:"Input Data"})}),e.jsx(a,{children:e.jsx("strong",{children:"Text Output"})}),e.jsx(a,{children:e.jsx("strong",{children:"Component Output"})})]})}),e.jsx(E,{children:w.map(({cellName:t,data:n,canReceive:T,description:R},I)=>e.jsxs(D,{children:[e.jsxs(a,{children:[e.jsx(P,{variant:"caption",sx:{fontFamily:"monospace"},children:t}),R&&e.jsx(P,{variant:"caption",display:"block",color:"text.secondary",children:R})]}),e.jsx(a,{children:e.jsx(P,{variant:"caption",sx:{fontFamily:"monospace",maxWidth:200,display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:typeof n=="object"?JSON.stringify(n):String(n)})}),e.jsx(a,{children:String(k(n,t,"text",T))}),e.jsx(a,{children:e.jsx(M,{sx:{display:"flex",alignItems:"center",gap:.5,flexWrap:"wrap"},children:k(n,t,"component",T)})})]},`${t}-${I}`))})]})}),Re={title:"Components/CippComponents/CippFormatting",component:U,tags:["autodocs"],parameters:{layout:"padded"}},s={args:{cases:[{cellName:"addrow",data:null,description:"No data placeholder"},{cellName:"baselineOption",data:null,description:"Download link"},{cellName:"delegatedPrivilegeStatus",data:"directTenant",description:"Direct tenant"},{cellName:"delegatedPrivilegeStatus",data:"gdap",description:"GDAP tenant"}]}},i={args:{cases:[{cellName:"Severity",data:"High",description:"Error color"},{cellName:"Severity",data:"Medium",description:"Warning color"},{cellName:"Severity",data:"Informational",description:"Info color"},{cellName:"Severity",data:"Debug",description:"Default color"},{cellName:"Severity",data:["High","Medium","Low"],description:"Array of severities"},{cellName:"Status",data:"Success"},{cellName:"Status",data:"Failed"},{cellName:"Status",data:"In Progress"},{cellName:"Status",data:"Warning"},{cellName:"Status",data:"Not Started"},{cellName:"Risk",data:"High"},{cellName:"Risk",data:"Medium"},{cellName:"UserImpact",data:"High"},{cellName:"Status",data:"Active",description:"Active status"},{cellName:"Status",data:"InProgress",description:"InProgress (one word)"},{cellName:"Status",data:"Resolved"},{cellName:"Status",data:"Redirected"},{cellName:"Status",data:"Skipped"},{cellName:"Status",data:"Passed"},{cellName:"Status",data:"Investigate"},{cellName:"Status",data:"Unknown Status",description:"Default/unknown status"},{cellName:"complianceState",data:"Compliant"},{cellName:"complianceState",data:"NonCompliant"}]}},r={args:{cases:[{cellName:"state",data:"enabled"},{cellName:"state",data:"disabled"},{cellName:"state",data:"enabledForReportingButNotEnforced",description:"Report Only"},{cellName:"state",data:"report-only",description:"Alternate report only"},{cellName:"state",data:"CustomState",description:"Unknown state"}]}},l={args:{cases:[{cellName:"accountEnabled",data:!0,description:"Boolean true"},{cellName:"accountEnabled",data:!1,description:"Boolean false"},{cellName:"bool",data:!0,description:"Bool cellName"},{cellName:"someField",data:{enabled:!0},description:"Object with enabled=true"},{cellName:"someField",data:{enabled:!1},description:"Object with enabled=false"},{cellName:"someField",data:{enabled:!0,date:"2026-04-10T10:00:00Z"},description:"Scheduled enabled"}]}},c={args:{cases:[{cellName:"createdDateTime",data:new Date(Date.now()-36e5).toISOString(),description:"1 hour ago"},{cellName:"lastModifiedDateTime",data:"2024-01-15T10:30:00Z",description:"Old date"},{cellName:"Timestamp",data:new Date(Date.now()-3e5).toISOString(),description:"5 min ago"},{cellName:"Expires",data:"2026-12-31T23:59:59Z",description:"Future date"},{cellName:"customExpirationDate",data:"2025-06-15T00:00:00Z",description:"Regex match"}]}},o={args:{cases:[{cellName:"breachPass",data:"S3cr3tP@ss!",description:"Breach password"},{cellName:"applicationSecret",data:"abc-123-def-456",description:"App secret"},{cellName:"refreshToken",data:"eyJhbGciOiJSUzI1NiIs...",description:"Refresh token"}]}},d={args:{cases:[{cellName:"portal_m365",data:"https://admin.microsoft.com",description:"M365 Admin"},{cellName:"portal_exchange",data:"https://admin.exchange.microsoft.com",description:"Exchange"},{cellName:"portal_entra",data:"https://entra.microsoft.com",description:"Entra ID"},{cellName:"portal_teams",data:"https://admin.teams.microsoft.com",description:"Teams"},{cellName:"portal_intune",data:"https://intune.microsoft.com",description:"Intune"},{cellName:"portal_security",data:"https://security.microsoft.com",description:"Security"}]}},m={args:{cases:[{cellName:"storageUsedInBytes",data:5368709120,description:"5 GB"},{cellName:"prohibitSendReceiveQuotaInBytes",data:53687091200,description:"50 GB"},{cellName:"storageUsedInBytes",data:null,description:"Null bytes"},{cellName:"alignmentScore",data:75,description:"75% alignment"},{cellName:"combinedAlignmentScore",data:42,description:"42% alignment"},{cellName:"LicenseMissingPercentage",data:15,description:"15% missing (flipped)"},{cellName:"ScorePercentage",data:88,description:"88% score"}]}},p={args:{cases:[{cellName:"DMARCPolicy",data:"s",description:"Strict"},{cellName:"DMARCPolicy",data:"r",description:"Relaxed"},{cellName:"DMARCPolicy",data:"afrf",description:"Auth Failure"},{cellName:"DMARCActionPolicy",data:"",description:"No action"},{cellName:"DMARCActionPolicy",data:"quarantine",description:"Quarantine"},{cellName:"MailProvider",data:"Null",description:"Unknown provider"},{cellName:"MailProvider",data:"Microsoft",description:"Known provider"},{cellName:"ScoreExplanation",data:"All checks passed",description:"Score explanation"},{cellName:"ReportInterval",data:86400,description:"1 day in seconds"},{cellName:"ReportInterval",data:604800,description:"7 days in seconds"}]}},u={args:{cases:[{cellName:"RepeatsEvery",data:"1d",description:"Daily"},{cellName:"RepeatsEvery",data:"4h",description:"Every 4 hours"},{cellName:"RepeatsEvery",data:"1w",description:"Weekly"},{cellName:"RepeatsEvery",data:"30m",description:"Every 30 minutes"}]}},N={args:{cases:[{cellName:"Tenant",data:"contoso.com",description:"Single string tenant"},{cellName:"Tenant",data:{label:"Contoso Ltd",value:"contoso.com"},description:"Tenant with label"},{cellName:"Tenant",data:["contoso.com","fabrikam.com"],description:"Array of tenants"},{cellName:"Tenant",data:[{label:"Contoso",value:"c",type:"Group"}],description:"Tenant group"},{cellName:"Tenant",data:null,description:"Null tenant"},{cellName:"tenantFilter",data:"contoso.com",description:"Tenant filter"}]}},g={args:{cases:[{cellName:"proxyAddresses",data:["SMTP:alice@contoso.com","smtp:alice.smith@contoso.com"],description:"Proxy addresses"},{cellName:"proxyAddresses",data:[],description:"Empty proxy"},{cellName:"businessPhones",data:["+1-555-1234","+1-555-5678"],description:"Phone numbers"},{cellName:"businessPhones",data:[],description:"No phones"},{cellName:"assignedLicenses",data:[{skuId:"05e9a617-0261-4cee-bb44-138d3ef5d965"}],description:"License SKU"},{cellName:"AssignedUsers",data:[{displayName:"Alice"},{displayName:"Bob"}],description:"Assigned users"},{cellName:"AssignedGroups",data:[{displayName:"All Users"}],description:"Assigned groups"},{cellName:"AccessRights",data:["FullAccess","SendAs"],description:"Access rights array"},{cellName:"AccessRights",data:"FullAccess, SendAs",description:"Access rights string"},{cellName:"From",data:"alice@contoso.com;bob@fabrikam.com",description:"From addresses"},{cellName:"someField",data:["tag1","tag2","tag3"],description:"Generic string array"},{cellName:"someField",data:{key1:"val1",key2:"val2"},description:"Generic object"}]}},S={args:{cases:[{cellName:"config",data:'{"setting": "value"}',description:"JSON object string"},{cellName:"tags",data:'["tag1", "tag2", "tag3"]',description:"JSON array of strings"},{cellName:"flag",data:"[true]",description:"JSON single boolean"},{cellName:"name",data:'["onlyOne"]',description:"JSON single string"},{cellName:"broken",data:"{invalid json",description:"Invalid JSON fallback"}]}},y={args:{cases:[{cellName:"hardwareHash",data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",description:"Long hardware hash (truncated)"},{cellName:"hardwareHash",data:"SHORT",description:"Short hardware hash"},{cellName:"Message",data:"A very long log message that exceeds 120 characters and should be truncated with an ellipsis because it is too long to display in a table cell without wrapping.",description:"Long message (truncated)"},{cellName:"Message",data:"Short message",description:"Short message"},{cellName:"info.logoUrl",data:"https://via.placeholder.com/16",description:"Logo URL"},{cellName:"info.logoUrl",data:null,description:"No logo"},{cellName:"ClientId",data:"12345-abcde-67890",description:"Client ID chip"},{cellName:"role",data:"Global Administrator",description:"Role chip"},{cellName:"standardType",data:"drift",description:"Drift standard"},{cellName:"standardType",data:"classic",description:"Classic standard"},{cellName:"Visibility",data:"public",description:"GitHub public"},{cellName:"Visibility",data:"private",description:"GitHub private"},{cellName:"htmlDescription",data:"<b>Bold</b> and <em>italic</em>",description:"HTML content"},{cellName:"someUrl",data:"https://example.com/path",description:"URL auto-link"},{cellName:"key",data:"accountEnabled",description:"Translation key"},{cellName:"bulkUser",data:[1,2,3,4,5],description:"5 bulk users"},{cellName:"PostExecution",data:"webhook, email, teams",description:"Post execution actions"},{cellName:"AutoMapUrl",data:"\\\\server\\share\\path",description:"AutoMap UNC path"}]}},h={args:{cases:[{cellName:"autoExtendDuration",data:"PT1H30M",description:"1 hour 30 minutes"},{cellName:"deploymentDuration",data:"PT45M",description:"45 minutes"},{cellName:"deviceSetupDuration",data:"PT2H15M30S",description:"2h 15m 30s"}]}},b={args:{cases:[{cellName:"configs",data:['{"name":"policy1"}','{"name":"policy2"}'],description:"Array of JSON object strings"},{cellName:"simpleJsonArray",data:['"tag1"','"tag2"'],description:"Array of JSON string values (parsed to strings)"},{cellName:"badJsonArray",data:["{broken","{also broken}"],description:"Array of invalid JSON strings (catch branch)"}]}},A={args:{cases:[{cellName:"countriesAndRegions",data:["US","GB","DE"],description:"Country codes array"},{cellName:"countriesAndRegions",data:"FR",description:"Single country code"},{cellName:"unifiedRoles",data:[{roleDefinitionId:"62e90394-69f5-4237-9190-012177145e10"}],description:"Role array"},{cellName:"unifiedRoles",data:[],description:"No roles"},{cellName:"roleDefinitionId",data:"62e90394-69f5-4237-9190-012177145e10",description:"Single role ID"},{cellName:"CIPPAction",data:'[{"label":"Enable User"},{"label":"Set Password"}]',description:"JSON actions"},{cellName:"CIPPAction",data:'{"label":"Single Action"}',description:"Single JSON action"}]}},f={args:{cases:[{cellName:"@odata.type",data:"#microsoft.graph.conditionalAccessPolicy",description:"Graph type"},{cellName:"@odata.type",data:"customType",description:"Non-graph type"},{cellName:"status.errorCode",data:0,description:"Sign-in error code 0"},{cellName:"status.errorCode",data:50126,description:"Sign-in error code"},{cellName:"location",data:{geoCoordinates:{latitude:47.6,longitude:-122.3},city:"Seattle",state:"WA"},description:"Location with coordinates"}]}},v={args:{cases:[{cellName:"Parameters.ScheduledBackupValues",data:{tenants:!0,users:!1,alerts:!0},description:"Backup params"},{cellName:"licenseAssignmentStates",data:[{skuId:"05e9a617-0261-4cee-bb44-138d3ef5d965",disabledPlans:[],state:"Active"}],description:"License states"},{cellName:"licenseAssignmentStates",data:[],description:"Empty license states"},{cellName:"CIPPExtendedProperties",data:'[{"Name":"IP","Value":"1.2.3.4"}]',description:"Extended properties"},{cellName:"excludedTenants",data:["tenant1.com","tenant2.com"],description:"Excluded tenants array"},{cellName:"excludedTenants",data:null,description:"Null excluded tenants"}]}},x={args:{cases:[{cellName:"anyField",data:null,description:"Null data"},{cellName:"anyField",data:void 0,description:"Undefined data"},{cellName:"anyField",data:"plain string",description:"Plain string fallback"},{cellName:"anyField",data:42,description:"Number fallback"},{cellName:"excludedTenants",data:null,description:"Null excluded tenants"},{cellName:"excludedTenants",data:["tenant1","tenant2"],description:"Excluded tenants array"},{cellName:"anyField",data:{label:"Option A",value:"a"},description:"Autocomplete label/value"},{cellName:"anyField",data:[{label:"X",value:"x"},{label:"Y",value:"y"}],description:"Array of autocomplete"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'addrow',
      data: null,
      description: 'No data placeholder'
    }, {
      cellName: 'baselineOption',
      data: null,
      description: 'Download link'
    }, {
      cellName: 'delegatedPrivilegeStatus',
      data: 'directTenant',
      description: 'Direct tenant'
    }, {
      cellName: 'delegatedPrivilegeStatus',
      data: 'gdap',
      description: 'GDAP tenant'
    }]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'Severity',
      data: 'High',
      description: 'Error color'
    }, {
      cellName: 'Severity',
      data: 'Medium',
      description: 'Warning color'
    }, {
      cellName: 'Severity',
      data: 'Informational',
      description: 'Info color'
    }, {
      cellName: 'Severity',
      data: 'Debug',
      description: 'Default color'
    }, {
      cellName: 'Severity',
      data: ['High', 'Medium', 'Low'],
      description: 'Array of severities'
    }, {
      cellName: 'Status',
      data: 'Success'
    }, {
      cellName: 'Status',
      data: 'Failed'
    }, {
      cellName: 'Status',
      data: 'In Progress'
    }, {
      cellName: 'Status',
      data: 'Warning'
    }, {
      cellName: 'Status',
      data: 'Not Started'
    }, {
      cellName: 'Risk',
      data: 'High'
    }, {
      cellName: 'Risk',
      data: 'Medium'
    }, {
      cellName: 'UserImpact',
      data: 'High'
    }, {
      cellName: 'Status',
      data: 'Active',
      description: 'Active status'
    }, {
      cellName: 'Status',
      data: 'InProgress',
      description: 'InProgress (one word)'
    }, {
      cellName: 'Status',
      data: 'Resolved'
    }, {
      cellName: 'Status',
      data: 'Redirected'
    }, {
      cellName: 'Status',
      data: 'Skipped'
    }, {
      cellName: 'Status',
      data: 'Passed'
    }, {
      cellName: 'Status',
      data: 'Investigate'
    }, {
      cellName: 'Status',
      data: 'Unknown Status',
      description: 'Default/unknown status'
    }, {
      cellName: 'complianceState',
      data: 'Compliant'
    }, {
      cellName: 'complianceState',
      data: 'NonCompliant'
    }]
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'state',
      data: 'enabled'
    }, {
      cellName: 'state',
      data: 'disabled'
    }, {
      cellName: 'state',
      data: 'enabledForReportingButNotEnforced',
      description: 'Report Only'
    }, {
      cellName: 'state',
      data: 'report-only',
      description: 'Alternate report only'
    }, {
      cellName: 'state',
      data: 'CustomState',
      description: 'Unknown state'
    }]
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'accountEnabled',
      data: true,
      description: 'Boolean true'
    }, {
      cellName: 'accountEnabled',
      data: false,
      description: 'Boolean false'
    }, {
      cellName: 'bool',
      data: true,
      description: 'Bool cellName'
    }, {
      cellName: 'someField',
      data: {
        enabled: true
      },
      description: 'Object with enabled=true'
    }, {
      cellName: 'someField',
      data: {
        enabled: false
      },
      description: 'Object with enabled=false'
    }, {
      cellName: 'someField',
      data: {
        enabled: true,
        date: '2026-04-10T10:00:00Z'
      },
      description: 'Scheduled enabled'
    }]
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'createdDateTime',
      data: new Date(Date.now() - 3600000).toISOString(),
      description: '1 hour ago'
    }, {
      cellName: 'lastModifiedDateTime',
      data: '2024-01-15T10:30:00Z',
      description: 'Old date'
    }, {
      cellName: 'Timestamp',
      data: new Date(Date.now() - 300000).toISOString(),
      description: '5 min ago'
    }, {
      cellName: 'Expires',
      data: '2026-12-31T23:59:59Z',
      description: 'Future date'
    }, {
      cellName: 'customExpirationDate',
      data: '2025-06-15T00:00:00Z',
      description: 'Regex match'
    }]
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'breachPass',
      data: 'S3cr3tP@ss!',
      description: 'Breach password'
    }, {
      cellName: 'applicationSecret',
      data: 'abc-123-def-456',
      description: 'App secret'
    }, {
      cellName: 'refreshToken',
      data: 'eyJhbGciOiJSUzI1NiIs...',
      description: 'Refresh token'
    }]
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'portal_m365',
      data: 'https://admin.microsoft.com',
      description: 'M365 Admin'
    }, {
      cellName: 'portal_exchange',
      data: 'https://admin.exchange.microsoft.com',
      description: 'Exchange'
    }, {
      cellName: 'portal_entra',
      data: 'https://entra.microsoft.com',
      description: 'Entra ID'
    }, {
      cellName: 'portal_teams',
      data: 'https://admin.teams.microsoft.com',
      description: 'Teams'
    }, {
      cellName: 'portal_intune',
      data: 'https://intune.microsoft.com',
      description: 'Intune'
    }, {
      cellName: 'portal_security',
      data: 'https://security.microsoft.com',
      description: 'Security'
    }]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'storageUsedInBytes',
      data: 5368709120,
      description: '5 GB'
    }, {
      cellName: 'prohibitSendReceiveQuotaInBytes',
      data: 53687091200,
      description: '50 GB'
    }, {
      cellName: 'storageUsedInBytes',
      data: null,
      description: 'Null bytes'
    }, {
      cellName: 'alignmentScore',
      data: 75,
      description: '75% alignment'
    }, {
      cellName: 'combinedAlignmentScore',
      data: 42,
      description: '42% alignment'
    }, {
      cellName: 'LicenseMissingPercentage',
      data: 15,
      description: '15% missing (flipped)'
    }, {
      cellName: 'ScorePercentage',
      data: 88,
      description: '88% score'
    }]
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'DMARCPolicy',
      data: 's',
      description: 'Strict'
    }, {
      cellName: 'DMARCPolicy',
      data: 'r',
      description: 'Relaxed'
    }, {
      cellName: 'DMARCPolicy',
      data: 'afrf',
      description: 'Auth Failure'
    }, {
      cellName: 'DMARCActionPolicy',
      data: '',
      description: 'No action'
    }, {
      cellName: 'DMARCActionPolicy',
      data: 'quarantine',
      description: 'Quarantine'
    }, {
      cellName: 'MailProvider',
      data: 'Null',
      description: 'Unknown provider'
    }, {
      cellName: 'MailProvider',
      data: 'Microsoft',
      description: 'Known provider'
    }, {
      cellName: 'ScoreExplanation',
      data: 'All checks passed',
      description: 'Score explanation'
    }, {
      cellName: 'ReportInterval',
      data: 86400,
      description: '1 day in seconds'
    }, {
      cellName: 'ReportInterval',
      data: 604800,
      description: '7 days in seconds'
    }]
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'RepeatsEvery',
      data: '1d',
      description: 'Daily'
    }, {
      cellName: 'RepeatsEvery',
      data: '4h',
      description: 'Every 4 hours'
    }, {
      cellName: 'RepeatsEvery',
      data: '1w',
      description: 'Weekly'
    }, {
      cellName: 'RepeatsEvery',
      data: '30m',
      description: 'Every 30 minutes'
    }]
  }
}`,...u.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'Tenant',
      data: 'contoso.com',
      description: 'Single string tenant'
    }, {
      cellName: 'Tenant',
      data: {
        label: 'Contoso Ltd',
        value: 'contoso.com'
      },
      description: 'Tenant with label'
    }, {
      cellName: 'Tenant',
      data: ['contoso.com', 'fabrikam.com'],
      description: 'Array of tenants'
    }, {
      cellName: 'Tenant',
      data: [{
        label: 'Contoso',
        value: 'c',
        type: 'Group'
      }],
      description: 'Tenant group'
    }, {
      cellName: 'Tenant',
      data: null,
      description: 'Null tenant'
    }, {
      cellName: 'tenantFilter',
      data: 'contoso.com',
      description: 'Tenant filter'
    }]
  }
}`,...N.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'proxyAddresses',
      data: ['SMTP:alice@contoso.com', 'smtp:alice.smith@contoso.com'],
      description: 'Proxy addresses'
    }, {
      cellName: 'proxyAddresses',
      data: [],
      description: 'Empty proxy'
    }, {
      cellName: 'businessPhones',
      data: ['+1-555-1234', '+1-555-5678'],
      description: 'Phone numbers'
    }, {
      cellName: 'businessPhones',
      data: [],
      description: 'No phones'
    }, {
      cellName: 'assignedLicenses',
      data: [{
        skuId: '05e9a617-0261-4cee-bb44-138d3ef5d965'
      }],
      description: 'License SKU'
    }, {
      cellName: 'AssignedUsers',
      data: [{
        displayName: 'Alice'
      }, {
        displayName: 'Bob'
      }],
      description: 'Assigned users'
    }, {
      cellName: 'AssignedGroups',
      data: [{
        displayName: 'All Users'
      }],
      description: 'Assigned groups'
    }, {
      cellName: 'AccessRights',
      data: ['FullAccess', 'SendAs'],
      description: 'Access rights array'
    }, {
      cellName: 'AccessRights',
      data: 'FullAccess, SendAs',
      description: 'Access rights string'
    }, {
      cellName: 'From',
      data: 'alice@contoso.com;bob@fabrikam.com',
      description: 'From addresses'
    }, {
      cellName: 'someField',
      data: ['tag1', 'tag2', 'tag3'],
      description: 'Generic string array'
    }, {
      cellName: 'someField',
      data: {
        key1: 'val1',
        key2: 'val2'
      },
      description: 'Generic object'
    }]
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'config',
      data: '{"setting": "value"}',
      description: 'JSON object string'
    }, {
      cellName: 'tags',
      data: '["tag1", "tag2", "tag3"]',
      description: 'JSON array of strings'
    }, {
      cellName: 'flag',
      data: '[true]',
      description: 'JSON single boolean'
    }, {
      cellName: 'name',
      data: '["onlyOne"]',
      description: 'JSON single string'
    }, {
      cellName: 'broken',
      data: '{invalid json',
      description: 'Invalid JSON fallback'
    }]
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'hardwareHash',
      data: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      description: 'Long hardware hash (truncated)'
    }, {
      cellName: 'hardwareHash',
      data: 'SHORT',
      description: 'Short hardware hash'
    }, {
      cellName: 'Message',
      data: 'A very long log message that exceeds 120 characters and should be truncated with an ellipsis because it is too long to display in a table cell without wrapping.',
      description: 'Long message (truncated)'
    }, {
      cellName: 'Message',
      data: 'Short message',
      description: 'Short message'
    }, {
      cellName: 'info.logoUrl',
      data: 'https://via.placeholder.com/16',
      description: 'Logo URL'
    }, {
      cellName: 'info.logoUrl',
      data: null,
      description: 'No logo'
    }, {
      cellName: 'ClientId',
      data: '12345-abcde-67890',
      description: 'Client ID chip'
    }, {
      cellName: 'role',
      data: 'Global Administrator',
      description: 'Role chip'
    }, {
      cellName: 'standardType',
      data: 'drift',
      description: 'Drift standard'
    }, {
      cellName: 'standardType',
      data: 'classic',
      description: 'Classic standard'
    }, {
      cellName: 'Visibility',
      data: 'public',
      description: 'GitHub public'
    }, {
      cellName: 'Visibility',
      data: 'private',
      description: 'GitHub private'
    }, {
      cellName: 'htmlDescription',
      data: '<b>Bold</b> and <em>italic</em>',
      description: 'HTML content'
    }, {
      cellName: 'someUrl',
      data: 'https://example.com/path',
      description: 'URL auto-link'
    }, {
      cellName: 'key',
      data: 'accountEnabled',
      description: 'Translation key'
    }, {
      cellName: 'bulkUser',
      data: [1, 2, 3, 4, 5],
      description: '5 bulk users'
    }, {
      cellName: 'PostExecution',
      data: 'webhook, email, teams',
      description: 'Post execution actions'
    }, {
      cellName: 'AutoMapUrl',
      data: '\\\\\\\\server\\\\share\\\\path',
      description: 'AutoMap UNC path'
    }]
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'autoExtendDuration',
      data: 'PT1H30M',
      description: '1 hour 30 minutes'
    }, {
      cellName: 'deploymentDuration',
      data: 'PT45M',
      description: '45 minutes'
    }, {
      cellName: 'deviceSetupDuration',
      data: 'PT2H15M30S',
      description: '2h 15m 30s'
    }]
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'configs',
      data: ['{"name":"policy1"}', '{"name":"policy2"}'],
      description: 'Array of JSON object strings'
    }, {
      cellName: 'simpleJsonArray',
      data: ['"tag1"', '"tag2"'],
      description: 'Array of JSON string values (parsed to strings)'
    }, {
      cellName: 'badJsonArray',
      data: ['{broken', '{also broken}'],
      description: 'Array of invalid JSON strings (catch branch)'
    }]
  }
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'countriesAndRegions',
      data: ['US', 'GB', 'DE'],
      description: 'Country codes array'
    }, {
      cellName: 'countriesAndRegions',
      data: 'FR',
      description: 'Single country code'
    }, {
      cellName: 'unifiedRoles',
      data: [{
        roleDefinitionId: '62e90394-69f5-4237-9190-012177145e10'
      }],
      description: 'Role array'
    }, {
      cellName: 'unifiedRoles',
      data: [],
      description: 'No roles'
    }, {
      cellName: 'roleDefinitionId',
      data: '62e90394-69f5-4237-9190-012177145e10',
      description: 'Single role ID'
    }, {
      cellName: 'CIPPAction',
      data: '[{"label":"Enable User"},{"label":"Set Password"}]',
      description: 'JSON actions'
    }, {
      cellName: 'CIPPAction',
      data: '{"label":"Single Action"}',
      description: 'Single JSON action'
    }]
  }
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: '@odata.type',
      data: '#microsoft.graph.conditionalAccessPolicy',
      description: 'Graph type'
    }, {
      cellName: '@odata.type',
      data: 'customType',
      description: 'Non-graph type'
    }, {
      cellName: 'status.errorCode',
      data: 0,
      description: 'Sign-in error code 0'
    }, {
      cellName: 'status.errorCode',
      data: 50126,
      description: 'Sign-in error code'
    }, {
      cellName: 'location',
      data: {
        geoCoordinates: {
          latitude: 47.6,
          longitude: -122.3
        },
        city: 'Seattle',
        state: 'WA'
      },
      description: 'Location with coordinates'
    }]
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'Parameters.ScheduledBackupValues',
      data: {
        tenants: true,
        users: false,
        alerts: true
      },
      description: 'Backup params'
    }, {
      cellName: 'licenseAssignmentStates',
      data: [{
        skuId: '05e9a617-0261-4cee-bb44-138d3ef5d965',
        disabledPlans: [],
        state: 'Active'
      }],
      description: 'License states'
    }, {
      cellName: 'licenseAssignmentStates',
      data: [],
      description: 'Empty license states'
    }, {
      cellName: 'CIPPExtendedProperties',
      data: '[{"Name":"IP","Value":"1.2.3.4"}]',
      description: 'Extended properties'
    }, {
      cellName: 'excludedTenants',
      data: ['tenant1.com', 'tenant2.com'],
      description: 'Excluded tenants array'
    }, {
      cellName: 'excludedTenants',
      data: null,
      description: 'Null excluded tenants'
    }]
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [{
      cellName: 'anyField',
      data: null,
      description: 'Null data'
    }, {
      cellName: 'anyField',
      data: undefined,
      description: 'Undefined data'
    }, {
      cellName: 'anyField',
      data: 'plain string',
      description: 'Plain string fallback'
    }, {
      cellName: 'anyField',
      data: 42,
      description: 'Number fallback'
    }, {
      cellName: 'excludedTenants',
      data: null,
      description: 'Null excluded tenants'
    }, {
      cellName: 'excludedTenants',
      data: ['tenant1', 'tenant2'],
      description: 'Excluded tenants array'
    }, {
      cellName: 'anyField',
      data: {
        label: 'Option A',
        value: 'a'
      },
      description: 'Autocomplete label/value'
    }, {
      cellName: 'anyField',
      data: [{
        label: 'X',
        value: 'x'
      }, {
        label: 'Y',
        value: 'y'
      }],
      description: 'Array of autocomplete'
    }]
  }
}`,...x.parameters?.docs?.source}}};const De=["SpecialFields","SeverityAndStatus","StateField","Booleans","DateTimeFields","PasswordsAndSecrets","PortalLinks","BytesAndPercentages","DomainAnalysis","RepeatSchedules","TenantFields","ArraysAndObjects","JSONStrings","MiscFields","ISODurations","ArrayOfJSONStrings","CountriesAndRoles","ODataAndLocation","ScheduleAndLicense","NullAndFallbacks"];export{b as ArrayOfJSONStrings,g as ArraysAndObjects,l as Booleans,m as BytesAndPercentages,A as CountriesAndRoles,c as DateTimeFields,p as DomainAnalysis,h as ISODurations,S as JSONStrings,y as MiscFields,x as NullAndFallbacks,f as ODataAndLocation,o as PasswordsAndSecrets,d as PortalLinks,u as RepeatSchedules,v as ScheduleAndLicense,i as SeverityAndStatus,s as SpecialFields,r as StateField,N as TenantFields,De as __namedExportsOrder,Re as default};
