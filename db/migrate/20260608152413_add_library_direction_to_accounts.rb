class AddLibraryDirectionToAccounts < ActiveRecord::Migration[8.2]
  def change
    add_column :accounts, :library_direction, :string, default: "ltr", null: false
  end
end
