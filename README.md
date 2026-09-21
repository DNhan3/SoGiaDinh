## NFC Card Access

This application is designed to serve **a large number of Catholic family records**, with each family assigned an NFC card.

Each NFC card contains a URL that directly identifies the corresponding family record.

### NFC URL Format

The URL follows this format:

```text
https://giaoxudongtienht.io.vn/GH/{familyId}.html
```

For example:

```text
https://giaoxudongtienht.io.vn/GH/03-015.html
```

Here:

```text
GH/
└── 03-015.html
    └── Family identifier
```

The `.html` URL format is intentionally preserved because these URLs are used by the NFC cards.

### User Flow

The normal user flow is:

```text
┌─────────────┐
│  NFC Card   │
└──────┬──────┘
       │
       │ Scan
       ▼
┌──────────────────────────────────────────┐
│ https://giaoxudongtienht.io.vn/          │
│              GH/03-015.html              │
└────────────────────┬─────────────────────┘
                     │
                     ▼
              Next.js Route
                     │
                     ▼
              Extract 03-015
                     │
                     ▼
             Find Family Data
                     │
                     ▼
             FamilyRecord
```

### No Homepage Required

The homepage (`/`) is **not part of the normal user flow**.

Users will normally access the application directly through the URL stored on their NFC card.

For example:

```text
NFC Card #1
→ /GH/03-015.html

NFC Card #2
→ /GH/03-016.html

NFC Card #3
→ /GH/03-017.html

...
```

There can be hundreds or thousands of these URLs, while the application uses the same React component to render each family.

### Next.js Routing

The application should handle the `.html` URLs and extract the family identifier from the path.

Conceptually:

```text
/GH/03-015.html
       │
       ▼
    03-015
       │
       ▼
  Family Data
       │
       ▼
 FamilyRecord
```

The application should **not create a separate React page for every family**.

Instead, one dynamic route/component should handle all family URLs.

### Example

When a user scans the NFC card containing:

```text
https://giaoxudongtienht.io.vn/GH/03-015.html
```

the application should:

1. Receive the request for `/GH/03-015.html`
2. Extract `03-015`
3. Use `03-015` to identify the family
4. Load the corresponding family data
5. Render the `FamilyRecord` component

The same logic can then handle:

```text
/GH/03-001.html
/GH/03-002.html
/GH/03-003.html
...
/GH/03-999.html
```

without creating individual pages for each family.

## Important Requirement

The `.html` URL format is part of the system's existing NFC-card structure.

Therefore, the Next.js application should **preserve this URL format** rather than replacing it with a new URL such as:

```text
/family/03-015
```

or:

```text
/03-015
```

The target URL remains:

```text
/GH/03-015.html
```
