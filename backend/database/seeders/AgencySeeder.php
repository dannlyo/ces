<?php

namespace Database\Seeders;

use App\Models\agencies;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AgencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rwanda_agencies = [
            "Rwanda Governance Board (RGB)",
            "Rwanda National Police (RNP)",
            "Ministry of Health",
            "Ministry of Education",
            "Ministry of Local Government",
            "Ministry of Infrastructure",
            "Rwanda Revenue Authority (RRA)",
            "Ministry of Justice",
            "Rwanda Social Security Board (RSSB)",
            "Rwanda Environment Management Authority (REMA)",
            "Ministry of Finance and Economic Planning (MINECOFIN)",
            "Rwanda Utilities Regulatory Authority (RURA)",
            "Ministry of Trade and Industry",
            "Rwanda Development Board (RDB)",
            "Rwanda Agriculture and Animal Resources Development Board (RAB)",
            "Rwanda Bureau of Standards (RBS)",
            "Office of the Auditor General",
            "Rwanda Food and Drugs Authority (RFDA)",
            "Rwanda Energy Group (REG)",
            "National Institute of Statistics of Rwanda (NISR)",
            "Rwanda Immigration and Emigration Directorate",
            "Ministry of ICT and Innovation",
            "Rwanda Correctional Services (RCS)",
            "Rwanda Transport Development Agency (RTDA)"
        ];

        foreach ($rwanda_agencies as $agency) {
            agencies::create([
                'name' => $agency,
            ]);
        }
    }
}
