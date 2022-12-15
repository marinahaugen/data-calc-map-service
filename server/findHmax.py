import xarray as xr

fn = '../ex-data/waves_2019-01-01.nc'
ds_waves = xr.open_dataset(fn)
data_array_hmax = ds_waves['hmax']

data_array_hmax_0_0 = data_array_hmax.sel(longitude=0.0, latitude=0.0, method='nearest')

def findHmax(lng, lat):
  lng_2 = round(lng, 2)
  lat_2 = round(lat, 2)
  da_hmax_lng_lat = data_array_hmax.sel(longitude=lng_2, latitude=lat_2, method='nearest')
  hmax_over_time = da_hmax_lng_lat.max(dim="time")
  print(f'For {lng_2, lat_2} er hmax: {hmax_over_time.data} m.')
  return hmax_over_time.data


findHmax(0.0, 0.0)
findHmax(10.434608886718252, 58.94715576458378)



