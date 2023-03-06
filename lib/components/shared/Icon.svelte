<script lang="ts">
  export let name: string;
  export let size: string = "1rem";
  export let fill: string = "currentColor";
  let icons = [
      {
        box: 32,
        name: "open",
        svg: `<rect x="12" width="20" height="4" fill=${fill} />
        <rect y="9" width="32" height="4" fill=${fill} />
        <rect x="12" y="18" width="20" height="4" fill=${fill} />`
      },
      {
        box: 24,
        name: "close",
        svg: `<rect y="3.60059" width="4" height="28" transform="rotate(-45 0 3.60059)" fill=${fill} />
        <rect x="20" y="0.600586" width="4" height="28" transform="rotate(45 20 0.600586)" fill=${fill} />`
      },
      {
        box: 50,
        name: "left",
        svg: `<path d="M20.5273 41L26.125 35.4091L11.1978 20.5L26.125 5.59091L20.5273 0L0.00236845 20.5L20.5273 41Z" fill=${fill} />
        <rect width="14" height="14" transform="matrix(-0.707119 -0.707094 -0.725175 0.688565 50 20.8994)" fill=${fill} />
        <path d="M30 20.583L24.9865 15.6977L19.9729 20.583L24.9865 25.4683L30 20.583Z" fill=${fill} />`
      },
      {
        box: 50,
        name: "right",
        svg: `<path d="M29.4725 41L23.875 35.4091L38.8017 20.5L23.875 5.59091L29.4725 0L49.9967 20.5L29.4725 41Z" fill=${fill} />
        <rect width="14" height="14" transform="matrix(0.707107 -0.707107 0.725163 0.688577 0 20.8994)" fill=${fill} />
        <path d="M20 20.583L25.0134 15.6977L30.0267 20.583L25.0134 25.4683L20 20.583Z" fill=${fill} />`
      },
      {
        box: 22,
        name: "diamond",
        svg: `<rect x="10.6066" y="4.24264" width="9" height="9" transform="rotate(45 10.6066 4.24264)" stroke=${fill} stroke-width="6" />`
      },
      {
        box: 43,
        name: "sun",
        svg: `<rect x="21.7485" width="30" height="30" transform="rotate(45 21.7485 0)" fill="#F7F7F7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4984 15.7483V11.8477H20.9984V15.7483H22.4984ZM18.5645 16.7562L15.8063 13.998L14.7456 15.0586L17.5038 17.8168L18.5645 16.7562ZM25.9927 17.8174L28.7509 15.0592L27.6902 13.9986L24.932 16.7568L25.9927 17.8174ZM16.4964 20.25H12.5957V21.75H16.4964V20.25ZM30.9007 20.25H27V21.75H30.9007V20.25ZM28.7503 26.9414L25.9921 24.1832L24.9314 25.2438L27.6896 28.002L28.7503 26.9414ZM15.8065 28.0024L18.5647 25.2442L17.504 24.1836L14.7458 26.9418L15.8065 28.0024ZM22.4984 30.1523V26.2517H20.9984V30.1523H22.4984ZM21.7485 24.9632C23.8196 24.9632 25.4985 23.2843 25.4985 21.2132C25.4985 19.1421 23.8196 17.4632 21.7485 17.4632C19.6775 17.4632 17.9985 19.1421 17.9985 21.2132C17.9985 23.2843 19.6775 24.9632 21.7485 24.9632Z" fill="#202020"/>`
      },
      {
        box: 43,
        name: "moon",
        svg: `<rect x="21.7485" width="30" height="30" transform="rotate(45 21.7485 0)" fill="#202020"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9999 25.3698C27.8942 25.3744 27.788 25.3767 27.6812 25.3767C23.717 25.3767 20.5034 22.1631 20.5034 18.1989C20.5034 16.6311 21.0061 15.1807 21.8591 14C18.0428 14.1667 15 17.3134 15 21.1708C15 25.135 18.2136 28.3486 22.1778 28.3486C24.5741 28.3486 26.6962 27.1743 27.9999 25.3698Z" fill="#F7F7F7"/>`
      },
  ];
  let icon = icons.find((e) => e.name === name);
</script>

<svg
class={$$props.class}
width={size}
height={size}
viewBox="0 0 {icon?.box} {icon?.box}">{@html icon?.svg}
</svg>
