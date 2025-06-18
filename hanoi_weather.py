import requests
from weather_codes_vi import weather_codes_vi

def get_hanoi_weather():
    latitude = 21.0285
    longitude = 105.8542
    url = (
        f"https://api.open-meteo.com/v1/forecast?"
        f"latitude={latitude}&longitude={longitude}"
        f"&current_weather=true"
    )

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if "current_weather" in data:
            temp = data["current_weather"]["temperature"]
            wind = data["current_weather"]["windspeed"]
            code = data["current_weather"]["weathercode"]
            desc = weather_codes_vi.get(code, "Không xác định")
            print(f"Nhiệt độ hiện tại ở Hà Nội: {temp}°C")
            print(f"Tốc độ gió: {wind} km/h")
            print(f"Thời tiết: {desc}")
        else:
            print("Không tìm thấy trường 'current_weather'. Dữ liệu trả về:")
            print(data)
    else:
        print("Không lấy được dữ liệu thời tiết.")

if __name__ == "__main__":
    get_hanoi_weather()
