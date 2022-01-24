# NgxWinds

Library of Angular component working alongside with TailwindCSS

## Tooltips
Fully customizable angular tooltips

### Exemples:
     <div class="border-2 border-purple-800 w-28" w-tooltip="left tooltip" w-position="left">
         Left tooltip
     </div>

#### Props
|name|type|default|description|
|-----|----|---|---|
|w-tooltip|string|   |Content of the tooltip|
|w-animation|boolean|true|wheter animation is visible|
|w-position|string|right|Position of the tooltip|
|w-html|boolean|false|interpret HTML in w-tooltip|
|w-class|string| |Add class on tooltip to customize|


#### Customization
All tooltips can be customized with class **w-tooltip**
All positional tooltips can be customized with class **w-tooltip-{left;right;top;bottom}**
To custom a single tooltip, you can attach a class with prop *w-class*, then you can apply your style in your main style.cssµ

    @layer components {
        .custom-tooltip {
            @apply text-red-800 !important;
        } 
    }
