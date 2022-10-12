import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography, Stack, Link, MenuItem } from '@mui/material';
// utils
// import { fDate } from '../../../../utils/formatTime';
// import createAvatar from '../../../../utils/createAvatar';
// import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
// import Avatar from '../../../../components/Avatar';
import Iconify from '../../../components/Iconify';
import { TableMoreMenu } from '../../../components/table';

// ----------------------------------------------------------------------

// InvoiceTableRow.propTypes = {
//   row: PropTypes.object.isRequired,
//   selected: PropTypes.bool,
//   onSelectRow: PropTypes.func,
//   onViewRow: PropTypes.func,
//   onEditRow: PropTypes.func,
//   onDeleteRow: PropTypes.func,
// };

export default function TypeTravel({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  const { id, status, name, img, awardType, place, amount, date } = row;
  //   const { date, employee, dept, breakTime, hours, overtime, breakDuration, checkOut, checkIn } = row;
  console.log(row);

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox" align="left">
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <Checkbox checked={selected} onClick={onSelectRow} />

            <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
              {id}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell padding="checkbox" align="center">
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <img
              src={img}
              alt=""
              style={{
                borderRadius: '50%',
                width: '50px',
                marginRight: '.3rem',
              }}
            />

            <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
              {name}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell padding="checkbox" align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {awardType}
          </Typography>
        </TableCell>
        <TableCell padding="checkbox" align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {place}
          </Typography>
        </TableCell>
        <TableCell padding="checkbox" align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {status}
          </Typography>
        </TableCell>
        <TableCell padding="checkbox" align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {amount}
          </Typography>
        </TableCell>
        <TableCell padding="checkbox" align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {date}
          </Typography>
        </TableCell>

        <TableCell align="right">
          <TableMoreMenu
            open={openMenu}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            actions={
              <>
                <MenuItem
                  onClick={() => {
                    onDeleteRow();
                    handleCloseMenu();
                  }}
                  sx={{ color: 'error.main' }}
                >
                  <Iconify icon={'eva:trash-2-outline'} />
                  Delete
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    onViewRow();
                    handleCloseMenu();
                  }}
                >
                  <Iconify icon={'eva:eye-fill'} />
                  View
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    onEditRow();
                    handleCloseMenu();
                  }}
                >
                  <Iconify icon={'eva:edit-fill'} />
                  Edit
                </MenuItem>
              </>
            }
          />
        </TableCell>
      </TableRow>
    </>
  );
}
