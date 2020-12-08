class Property < ApplicationRecord
    belongs_to :company
    has_many :client_properties
    has_many :clients, through: :client_properties
end
