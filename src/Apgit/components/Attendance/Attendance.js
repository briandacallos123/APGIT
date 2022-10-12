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

export default function AttendanceTable({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  // const { sent, invoiceNumber, createDate, dueDate, status, invoiceTo, totalPrice } = row;
  const { date, employee, dept, breakTime, hours, overtime, breakDuration, checkOut, checkIn } = row;
  console.log(row);

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox" align="left">
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <Checkbox checked={selected} onClick={onSelectRow} />
          {date}
        </Stack>
      </TableCell>

      <TableCell padding="checkbox" align="center">
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <img
            src={employee}
            alt=""
            style={{
              borderRadius: '50%',
              width: '50px',
              marginRight: '.5rem',
            }}
          />

          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            +20
          </Typography>
        </Stack>
      </TableCell>

      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {dept}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {breakTime}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {breakDuration}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {checkIn}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {checkOut}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {hours}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {overtime}
        </Typography>
      </TableCell>

      {/* actions */}
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
      <TableCell>{}</TableCell>
    </TableRow>
  );
}
