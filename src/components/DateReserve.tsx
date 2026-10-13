'use client'

import { useState } from 'react'
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'

export default function DateReserve() {
  const [date, setDate] = useState<Dayjs | null>(null)
  const [venue, setVenue] = useState('')

  return (
    <div className="flex flex-col gap-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>

      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
      />

      <FormControl variant="standard">
        <InputLabel id="venue-label">Venue</InputLabel>
        <Select
          labelId="venue-label"
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}