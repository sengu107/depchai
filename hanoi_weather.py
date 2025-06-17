import requests

def get_hanoi_weather():
    latitude = 21.0285
    longitude = 105.8542
    url = (
        "https://api.open-meteo.com/v1/forecast"
        f"?latitude={latitude}&longitude={longitude}"
        "&current_weather=true"
    )
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if "current_weather" in data:
            print("Thời tiết hiện tại ở Hà Nội:")
            print(data["current_weather"])
        else:
            print("Không tìm thấy trường 'current_weather'. Dữ liệu trả về:")
            print(data)
    else:
        print("Không lấy được dữ liệu thời tiết.")

if __name__ == "__main__":
    get_hanoi_weather()
