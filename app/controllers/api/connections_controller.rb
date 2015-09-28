class Api::ConnectionsController < ApplicationController

  include Api::ConnectionsHelper

  before_action :current_api_user!

    def index
      render json: @current_user.connections
    end

  def create
    current_api_user!
    connection = @current_user.connections.create(connection_params)
    render json: review
  end

  def show
    current_api_user!
    render json: @current_user.connections.find(params[:id])
  end

  def destroy
    current_api_user!
    @current_user.connections.destroy(params[:id])
    render status: 202
  end

  private

  def connection_params
    params.require(:connection).permit(:train, :message)
  end

end
