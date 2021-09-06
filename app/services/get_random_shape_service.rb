require 'net/http'
class GetRandomShapeService
  SERVICE_URL = 'https://5eddt4q9dk.execute-api.us-east-1.amazonaws.com/rps-stage/throw'.freeze
  SHAPE_ARRAY = %w(rock scissors paper)

  def self.call
    uri = URI(SERVICE_URL)
    response = Net::HTTP.get_response(uri)
    body = JSON.parse(response.body)

    random_shape = case body["statusCode"]
    when 200
      if(SHAPE_ARRAY.include?(body["body"]))
        JSON.parse(JSON.parse(response.body)["body"])
      else
        SHAPE_ARRAY.sample
      end
    else
      SHAPE_ARRAY.sample
    end

    random_shape
  end
end 