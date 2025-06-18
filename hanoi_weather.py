import requests
import sys
from weather_codes_vi import weather_codes_vi

print(f"Default encoding: {sys.getdefaultencoding()}")

latitude = 21.0285
longitude = 105.8542

url = (
    f"https://api.open-meteo.com/v1/forecast?"
    f"latitude={latitude}&longitude={longitude}"
    f"&current_weather=true"
)

response = requests.get(url)
data = response.json()
print(data)  # In ra để kiểm tra cấu trúc

if "current_weather" in data:
    temp = data["current_weather"]["temperature"]
    wind = data["current_weather"]["windspeed"]
    code = data["current_weather"]["weathercode"]  # API luôn trả về dạng số
    print(f"Weather code: {code}")
    print(f"Available codes: {list(weather_codes_vi.keys())}")
    desc = weather_codes_vi.get(code, "Không xác định")
    print(f"Raw description: {desc!r}")
    print(f"Nhiệt độ hiện tại ở Hà Nội: {temp}°C")
    print(f"Tốc độ gió: {wind} km/h")
    print(f"Thời tiết: {desc}")
else:
    print("Không lấy được dữ liệu thời tiết.")
