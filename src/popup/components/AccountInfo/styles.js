const styles = (theme) => ({
  acctName: {
    fontSize: theme.font.lg,
    fontWeight: 'bold',
    color: theme.palette.text.light,
    marginBottom: theme.spacing.unit,
  },
  address: {
    fontSize: theme.font.sm,
    color: theme.palette.text.light,
    marginBottom: theme.spacing.md,
  },
  amountContainer: {
    width: '100%',
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    display: 'inline-flex',
  },
  tokenAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.palette.text.light,
    marginRight: theme.spacing.xs,
  },
  token: {
    fontSize: theme.font.sm,
    color: theme.palette.text.light,
    flex: 1,
    alignSelf: 'flex-end',
    marginBottom: 6,
  },
  rightArrow: {
    fontSize: 22,
    color: theme.palette.text.light,
    alignSelf: 'center',
  },
  actionButtonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionButton: {
    padding: `${theme.spacing.unit} ${theme.spacing.sm}`,
    marginRight: theme.spacing.xs,
    fontSize: theme.font.sm,
  },
});

export default styles;
