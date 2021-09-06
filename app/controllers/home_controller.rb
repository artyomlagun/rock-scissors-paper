class HomeController < ApplicationController
  def index; end

  def generate_choice
    shape = GetRandomShapeService.call
    render json: {shape: shape}, status: :ok
  end
end