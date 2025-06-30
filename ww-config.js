export default {
  editor: {
    label: {
      en: "shadcn Skeleton",
      fr: "Squelette shadcn"
    },
    icon: 'fas fa-square-o',
    bubble: {
      icon: 'fas fa-square-o'
    },
    deprecated: false
  },
  properties: {
    width: {
      label: {
        en: "Width",
        fr: "Largeur"
      },
      type: "Length",
      defaultValue: "100%",
      bindable: true,
      section: "dimensions"
    },
    height: {
      label: {
        en: "Height", 
        fr: "Hauteur"
      },
      type: "Length",
      defaultValue: "20px",
      bindable: true,
      section: "dimensions"
    },
    shape: {
      label: {
        en: "Shape",
        fr: "Forme"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "rounded", label: { en: "Rounded", fr: "Arrondi" } },
          { value: "circle", label: { en: "Circle", fr: "Cercle" } },
          { value: "square", label: { en: "Square", fr: "Carré" } }
        ]
      },
      defaultValue: "rounded",
      section: "appearance"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  sections: {
    dimensions: {
      label: { en: "Dimensions", fr: "Dimensions" },
      expand: true
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: true
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 