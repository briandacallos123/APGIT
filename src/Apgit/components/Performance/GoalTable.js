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

export default function AppraisalTable({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  // const { sent, invoiceNumber, createDate, dueDate, status, invoiceTo, totalPrice } = row;
  const { goalType, subject, target, rating, progress, startDate, endDate } = row;

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
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {goalType}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {subject}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {target}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {rating}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {progress}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {startDate}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {endDate}
        </Typography>
      </TableCell>
      {/* 
      <TableCell padding="checkbox" align="center">
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <img
            src={addebByImg}
            alt=""
            style={{
              borderRadius: '50%',
              width: '50px',
              marginRight: '.5rem',
            }}
          />

          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            +{employeeCount}
          </Typography>
        </Stack>
      </TableCell>
     
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {designation}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {rating}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {addedBy}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {createdAt}
        </Typography>
      </TableCell> */}

      <TableCell align="center">
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
