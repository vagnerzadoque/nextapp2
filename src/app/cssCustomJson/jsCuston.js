import themes from '@naturacosmeticos/natds-themes'

export default function(theme) {
    return {
      '.vagner-outra-classe': {
        backgroundColor: theme('colors.primary'),
        color: theme('colors.onPrimary'),
        padding: theme('spacing.4')
      },
      '.vagner-outra-classe2': {
        backgroundColor: theme('colors.secondary'),
        color: theme('colors.onSecondary'),
        padding: theme('spacing.6')
      },
      '.ButtonContainerContained': {
        backgroundColor: theme('colors.primary'),
        border: "none",
        color: theme('colors.onPrymary'),
        padding: theme('spacing.6')
    },
    '.ButtonContainerOutlined':{
        backgroundColor: "none",
        border:`1px solid ${theme('colors.primary')}`,
        color: theme('colors.onPrymary'),
        
    }
    };
  }