// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
import useSettings from '../../../hooks/useSettings';
// _mock_
import {
  _ecommerceNewProducts,
  _ecommerceSalesOverview,
  _ecommerceBestSalesman,
  _ecommerceLatestProducts,
} from '../../../_mock';
// components
import Page from '../../../components/Page';
// sections
import {
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance,
} from '../../../sections/@dashboard/general/e-commerce';
import { AppWelcome } from '../../../sections/@dashboard/general/app';
// assets
import { MotivationIllustration } from '../../../assets';

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  const { user } = useAuth();

  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: E-commerce">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <AppWelcome
              title={`Welcome Admin.`}
              description="Let's work together to achieve our future."
              img={
                <MotivationIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Learn more</Button>}
            />
          </Grid>

          {/* <Grid item xs={12} md={4}>
            <EcommerceNewProducts list={_ecommerceNewProducts} />
          </Grid> */}

          <Grid item xs={12} md={3}>
            <EcommerceWidgetSummary
              title="Total Employee"
              percent={1.3}
              total={3}
              chartColor={theme.palette.primary.main}
              chartData={[1, 4, 8, 12, 15, 17, 19, 22]}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <EcommerceWidgetSummary
              title="Total Expenses"
              percent={0}
              total={0}
              chartColor={theme.palette.chart.green[0]}
              chartData={[0, 0, 0, 0, 0, 0]}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <EcommerceWidgetSummary
              title="Total Meetings"
              percent={1.5}
              total={0}
              chartColor={theme.palette.chart.green[0]}
              chartData={[10, 20, 30, 40, 50]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <EcommerceWidgetSummary
              title="Support Tickets"
              percent={1.5}
              total={0}
              chartColor={theme.palette.chart.green[0]}
              chartData={[10, 20, 30, 40, 50]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender
              title="Total Attendance By Summary"
              total={2324}
              chartData={[
                { label: 'Present', value: 100 },
                // { label: 'Womens', value: 100 },
              ]}
              chartColors={[
                [theme.palette.primary.light, theme.palette.primary.main],
                [theme.palette.warning.light, theme.palette.warning.main],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales
              title="Expense of September 2022  "
              subheader="(+43%) than last year"
              chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
              chartData={[
                {
                  year: '2019',
                  data: [
                    { name: 'Total Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                    { name: 'Total Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    { name: 'Total Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                    { name: 'Total Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                  ],
                },
              ]}
            />
          </Grid>
          {/* 
          <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview title="Sales Overview" data={_ecommerceSalesOverview} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceCurrentBalance title="Current Balance" currentBalance={187650} sentAmount={25500} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceBestSalesman
              title="Best Employee"
              tableData={_ecommerceBestSalesman}
              tableLabels={[
                { id: 'seller', label: 'Seller' },
                { id: 'product', label: 'Product' },
                { id: 'country', label: 'Country', align: 'center' },
                { id: 'total', label: 'Total' },
                { id: 'rank', label: 'Rank', align: 'right' },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceLatestProducts title="Latest Meetings" list={_ecommerceLatestProducts} />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
